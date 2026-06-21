import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import {
  getAnswerScore,
  getRoundDuration,
  getSignSpeedRounds,
  shuffleSignSpeedItems,
  type SignSpeedRound,
} from '../../data/minigames/signSpeedGame';
import type { ScoreboardEntry } from '../../utils/localProfile';
import './SignSpeedGame.css';

type GamePhase = 'idle' | 'countdown' | 'playing' | 'feedback' | 'reveal' | 'ended';

type EndReason = 'wrong' | 'timeout';

export type SignSpeedGameResult = {
  score: number;
  streak: number;
  roundsAnswered: number;
  reason: EndReason;
};

export type SignSpeedGameProps = {
  rounds?: SignSpeedRound[];
  playerName?: string;
  onGameEnd?: (result: SignSpeedGameResult) => void;
  onProfileClick?: () => void;
  onClose?: () => void;
  scoreboard?: ScoreboardEntry[];
};

type GameState = {
  phase: GamePhase;
  deck: SignSpeedRound[];
  round: SignSpeedRound | null;
  roundIndex: number;
  score: number;
  streak: number;
  selectedCode: string | null;
  gainedPoints: number;
  endReason: EndReason | null;
  durationMs: number;
  startedAt: number;
  progressRatio: number;
  countdownVal: number | null;
};

const answerLabels = ['A', 'B', 'C', 'D'];
const confettiPieces = Array.from({ length: 18 }, (_, index) => index);

const formatScore = (score: number) => new Intl.NumberFormat('nb-NO').format(score);

const createInitialState = (rounds: SignSpeedRound[]): GameState => ({
  phase: 'idle',
  deck: shuffleSignSpeedItems(rounds),
  round: null,
  roundIndex: 0,
  score: 0,
  streak: 0,
  selectedCode: null,
  gainedPoints: 0,
  endReason: null,
  durationMs: 0,
  startedAt: 0,
  progressRatio: 1,
  countdownVal: null,
});

export function SignSpeedGame({ rounds, playerName, onGameEnd, onProfileClick, onClose, scoreboard }: SignSpeedGameProps) {
  const roundBank = useMemo(() => rounds ?? getSignSpeedRounds(), [rounds]);
  const [state, setState] = useState<GameState>(() => createInitialState(roundBank));
  const reportedResultKey = useRef<string | null>(null);

  useEffect(() => {
    setState(createInitialState(roundBank));
  }, [roundBank]);

  useEffect(() => {
    if (state.phase !== 'playing' || !state.round) {
      return undefined;
    }

    let frameId = 0;

    const tick = () => {
      const elapsedMs = performance.now() - state.startedAt;
      const remainingRatio = 1 - elapsedMs / state.durationMs;

      if (remainingRatio <= 0) {
        setState((current) => ({
          ...current,
          phase: 'reveal',
          endReason: 'timeout',
          selectedCode: null,
          progressRatio: 0,
        }));
        return;
      }

      setState((current) => ({
        ...current,
        progressRatio: Math.max(0, Math.min(1, remainingRatio)),
      }));
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [state.durationMs, state.phase, state.round, state.startedAt]);

  useEffect(() => {
    if (state.phase !== 'reveal') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setState((current) => ({
        ...current,
        phase: 'ended',
      }));
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [state.phase]);

  useEffect(() => {
    if (state.phase !== 'feedback') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setState((current) => {
        const deck = current.deck.length > 0 ? current.deck : shuffleSignSpeedItems(roundBank);
        const [round, ...remainingDeck] = deck;

        if (!round) {
          return {
            ...createInitialState(roundBank),
            phase: 'reveal',
            endReason: 'timeout',
            progressRatio: 0,
          };
        }

        const roundIndex = current.roundIndex + 1;

        window.scrollTo(0, 0);

        return {
          ...current,
          phase: 'playing',
          deck: remainingDeck,
          round,
          roundIndex,
          durationMs: getRoundDuration(roundIndex),
          startedAt: performance.now(),
          selectedCode: null,
          gainedPoints: 0,
          endReason: null,
          progressRatio: 1,
        };
      });
    }, 760);

    return () => {
      window.clearTimeout(timer);
    };
  }, [roundBank, state.phase]);

  useEffect(() => {
    if (state.phase === 'ended' && state.endReason) {
      const resultKey = `${state.score}-${state.streak}-${state.roundIndex}-${state.endReason}`;

      if (reportedResultKey.current === resultKey) {
        return;
      }

      reportedResultKey.current = resultKey;
      onGameEnd?.({
        score: state.score,
        streak: state.streak,
        roundsAnswered: state.roundIndex,
        reason: state.endReason,
      });
    }
  }, [onGameEnd, state.endReason, state.phase, state.roundIndex, state.score, state.streak]);

  const startRound = useCallback(() => {
    setState((current) => {
      const deck = current.deck.length > 0 ? current.deck : shuffleSignSpeedItems(roundBank);
      const [round, ...remainingDeck] = deck;

      if (!round) {
        return {
          ...createInitialState(roundBank),
          phase: 'reveal',
          endReason: 'timeout',
          progressRatio: 0,
        };
      }

      window.scrollTo(0, 0);

      return {
        ...current,
        phase: 'playing',
        deck: remainingDeck,
        round,
        durationMs: getRoundDuration(current.roundIndex),
        startedAt: performance.now(),
        selectedCode: null,
        gainedPoints: 0,
        endReason: null,
        progressRatio: 1,
      };
    });
  }, [roundBank]);

  // Countdown timer effect (ticks from 3 down to 0)
  useEffect(() => {
    if (state.phase !== 'countdown') {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setState((current) => {
        if (current.phase !== 'countdown' || current.countdownVal === null) {
          return current;
        }

        if (current.countdownVal > 0) {
          return {
            ...current,
            countdownVal: current.countdownVal - 1,
          };
        }

        return current;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [state.phase]);

  // Once countdown reaches 0, wait 1 second and then start the round
  useEffect(() => {
    if (state.phase === 'countdown' && state.countdownVal === 0) {
      const timerId = window.setTimeout(() => {
        startRound();
      }, 1000);
      return () => window.clearTimeout(timerId);
    }
    return undefined;
  }, [state.phase, state.countdownVal, startRound]);

  const startGame = useCallback(() => {
    reportedResultKey.current = null;
    setState({
      ...createInitialState(roundBank),
      phase: 'countdown',
      countdownVal: 3,
    });
  }, [roundBank]);

  const resetGame = useCallback(() => {
    reportedResultKey.current = null;
    setState(createInitialState(roundBank));
  }, [roundBank]);

  const answer = useCallback((code: string) => {
    setState((current) => {
      if (current.phase !== 'playing' || !current.round) {
        return current;
      }

      const isCorrect = code === current.round.correctSign.code;
      const elapsedMs = performance.now() - current.startedAt;
      const remainingMs = Math.max(0, current.durationMs - elapsedMs);

      if (!isCorrect) {
        return {
          ...current,
          phase: 'reveal',
          selectedCode: code,
          endReason: 'wrong',
          progressRatio: Math.max(0, Math.min(1, remainingMs / current.durationMs)),
        };
      }

      const gainedPoints = getAnswerScore(remainingMs, current.durationMs, current.streak);

      return {
        ...current,
        phase: 'feedback',
        selectedCode: code,
        score: current.score + gainedPoints,
        streak: current.streak + 1,
        gainedPoints,
        progressRatio: Math.max(0, Math.min(1, remainingMs / current.durationMs)),
      };
    });
  }, []);

  const restart = useCallback(() => {
    reportedResultKey.current = null;
    setState({
      ...createInitialState(roundBank),
      phase: 'countdown',
      countdownVal: 3,
    });
  }, [roundBank]);

  const isActive =
    state.phase === 'countdown' || state.phase === 'playing' || state.phase === 'feedback' || state.phase === 'reveal';
  const round = state.round;

  return (
    <main className={`game-shell ${isActive ? 'is-active' : ''}`}>
      <header className="game-header">
        <button className="close-button" type="button" onClick={onClose ?? resetGame} aria-label="Avslutt">
          ×
        </button>
        {state.phase !== 'countdown' ? (
          <>
            <div className="score-board">
              <strong>{formatScore(state.score)}</strong>
              <span>poeng</span>
            </div>
            {playerName ? (
              <button className="profile-button" type="button" onClick={onProfileClick}>
                <span>{playerName.slice(0, 1).toUpperCase()}</span>
              </button>
            ) : (
              <span aria-hidden="true" />
            )}
            <div className="timer-track" aria-hidden="true">
              <div
                className="timer-fill"
                data-progress
                style={{ transform: `scaleX(${state.progressRatio})` }}
              />
            </div>
            <div className="meta-row" aria-label="Status">
              <span>{state.streak} streak</span>
              <span>{roundBank.length} påstander</span>
            </div>
          </>
        ) : (
          <div style={{ gridColumn: 'span 2' }} />
        )}
      </header>

      {state.phase === 'countdown' ? (
        <section className="countdown-panel">
          <h2 className="countdown-text">Gjør deg klar!</h2>
          <div className="countdown-number" key={state.countdownVal}>
            {state.countdownVal}
          </div>
          <div className="countdown-shapes" aria-hidden="true">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </section>
      ) : !round ? (
        <section className="start-panel">
          <p className="eyebrow">Skiltbanken</p>
          <h1>Skiltduellen</h1>
          {playerName ? <p className="player-greeting">Klar, {playerName}?</p> : null}
          <button className="primary-action" type="button" onClick={startGame}>
            Start
          </button>
          {onClose ? (
            <button className="secondary-action" type="button" onClick={onClose} style={{ minWidth: '154px' }}>
              Tilbake til spillene
            </button>
          ) : null}

          {scoreboard && scoreboard.length > 0 ? (
            <div className="scoreboard-container">
              <h3 className="scoreboard-title">🏆 Toppliste</h3>
              <div className="scoreboard-list">
                {scoreboard.slice(0, 5).map((entry, index) => {
                  const isPlayer = entry.nickname === playerName;
                  const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
                  return (
                    <div key={entry.id} className={`scoreboard-row ${isPlayer ? 'is-player' : ''}`}>
                      <span className="scoreboard-rank">{rankIcon}</span>
                      <span className="scoreboard-name">{entry.nickname}</span>
                      <span className="scoreboard-streak" title="Beste streak">🔥 {entry.streak}</span>
                      <span className="scoreboard-score">{formatScore(entry.score)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </section>
      ) : (
        <section className="round-panel">
          <p className="round-kicker">Runde {state.roundIndex + 1}</p>
          <h1>{round.claim}</h1>
          <div className="choices" aria-label="Svaralternativer">
            {round.options.map((sign, index) => {
              const isSelected = state.selectedCode === sign.code;
              const isCorrect = sign.code === round.correctSign.code;
              const shouldReveal =
                state.phase === 'feedback' || state.phase === 'reveal' || state.phase === 'ended';
              const resultClass = shouldReveal && isCorrect
                ? 'is-correct'
                : isSelected
                  ? 'is-wrong'
                  : '';

              return (
                <button
                  className={`sign-choice ${resultClass}`}
                  type="button"
                  key={sign.code}
                  onClick={() => answer(sign.code)}
                  disabled={state.phase !== 'playing'}
                  aria-label={sign.name}
                >
                  <span className="sign-choice__halo" />
                  <img src={sign.imagePath} alt={sign.name} />
                  <span className="sign-choice__code">{answerLabels[index]}</span>
                </button>
              );
            })}
          </div>
          {state.phase === 'feedback' ? (
            <>
              <div className="confetti-burst" aria-hidden="true">
                {confettiPieces.map((piece) => (
                  <span
                    key={piece}
                    style={{ '--piece': piece } as CSSProperties}
                  />
                ))}
              </div>
              <div className="score-pop">+{formatScore(state.gainedPoints)}</div>
            </>
          ) : null}
          {state.phase === 'ended' ? (
            <section className="end-panel" aria-live="polite">
              <p className="eyebrow">
                {state.endReason === 'timeout' ? 'Tiden gikk ut' : 'Feil svar'}
              </p>
              <h2>{formatScore(state.score)} poeng</h2>
              <p>{round.explanation}</p>
              <button className="primary-action" type="button" onClick={restart}>
                Prøv igjen
              </button>
              {onClose ? (
                <button className="secondary-action" type="button" onClick={onClose} style={{ minWidth: '154px' }}>
                  Avslutt spill
                </button>
              ) : null}
            </section>
          ) : null}
        </section>
      )}
    </main>
  );
}
