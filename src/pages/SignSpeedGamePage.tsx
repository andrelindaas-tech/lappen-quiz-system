import { useCallback, useEffect, useMemo, useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SignSpeedGame, type SignSpeedGameResult } from '../components/minigames/SignSpeedGame';
import {
  clearLocalProfile,
  createLocalProfile,
  isValidNickname,
  loadLocalProfile,
  recordLocalProfileGame,
  renameLocalProfile,
  saveLocalProfile,
  loadScoreboard,
  addScoreToScoreboard,
  type LocalProfile,
  type ScoreboardEntry,
} from '../utils/localProfile';

const formatScore = (score: number) => new Intl.NumberFormat('nb-NO').format(score);

export default function SignSpeedGamePage() {
  const navigate = useNavigate();

  // GA4: game started
  useEffect(() => {
    trackEvent('game_started', { game_name: 'skiltduellen' });
  }, []);

  const [profile, setProfile] = useState<LocalProfile | null>(() => loadLocalProfile());
  const [nickname, setNickname] = useState(() => profile?.nickname ?? '');
  const [isEditingProfile, setIsEditingProfile] = useState(() => !profile);
  const [scoreboard, setScoreboard] = useState<ScoreboardEntry[]>(() => loadScoreboard());

  const canSaveProfile = useMemo(() => isValidNickname(nickname), [nickname]);

  const saveProfile = useCallback(() => {
    if (!canSaveProfile) {
      return;
    }

    const nextProfile = profile
      ? renameLocalProfile(profile, nickname)
      : createLocalProfile(nickname);

    saveLocalProfile(nextProfile);
    setProfile(nextProfile);
    setNickname(nextProfile.nickname);
    setIsEditingProfile(false);
  }, [canSaveProfile, nickname, profile]);

  const handleGameEnd = useCallback((result: SignSpeedGameResult) => {
    setProfile((currentProfile) => {
      if (!currentProfile) {
        return currentProfile;
      }

      const nextProfile = recordLocalProfileGame(currentProfile, result);
      saveLocalProfile(nextProfile);

      setScoreboard(() =>
        addScoreToScoreboard(
          nextProfile.nickname,
          result.score,
          result.streak,
          result.roundsAnswered
        )
      );

      return nextProfile;
    });
  }, []);

  const resetProfile = useCallback(() => {
    clearLocalProfile();
    setProfile(null);
    setNickname('');
    setIsEditingProfile(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trafikkskilt-spill: Skiltduellen – hvor mange klarer du?</title>
        <meta
          name="description"
          content="Gratis skiltspill: kjenn igjen norske trafikkskilt før tiden går ut. Jo raskere du svarer, jo flere poeng. Perfekt trening til teoriprøven klasse B."
        />
        <meta property="og:title" content="Trafikkskilt-spill: Skiltduellen – hvor mange klarer du?" />
        <meta property="og:description" content="Gratis skiltspill: kjenn igjen norske trafikkskilt før tiden går ut. Jo raskere du svarer, jo flere poeng. Perfekt trening til teoriprøven klasse B." />
        <link rel="canonical" href="https://teori-test.no/laeringsspill/skiltduellen/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoGame',
            name: 'Skiltduellen',
            url: 'https://teori-test.no/laeringsspill/skiltduellen',
            description: 'Tidsbasert læringsspill der du kjenner igjen norske trafikkskilt før tiden går ut. Laget for teoriprøven klasse B.',
            genre: 'Educational',
            gamePlatform: 'Web browser',
            applicationCategory: 'Game',
            isAccessibleForFree: true,
            inLanguage: 'nb',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Læringsspill', item: 'https://teori-test.no/laeringsspill' },
              { '@type': 'ListItem', position: 2, name: 'Skiltduellen' },
            ],
          })}
        </script>
      </Helmet>

      <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SignSpeedGame
          playerName={profile?.nickname}
          onGameEnd={handleGameEnd}
          onProfileClick={() => {
            setNickname(profile?.nickname ?? '');
            setIsEditingProfile(true);
          }}
          onClose={() => navigate('/laeringsspill')}
          scoreboard={scoreboard}
        />

        {isEditingProfile ? (
          <section className="profile-panel" aria-label="Lokal profil">
            <div className="profile-panel__inner">
              <p className="eyebrow" style={{ color: 'var(--green)' }}>Lokal profil</p>
              <h2 style={{ margin: '0 0 8px 0', fontSize: '1.65rem' }}>
                {profile ? 'Endre nick' : 'Hva skal vi kalle deg?'}
              </h2>
              <p style={{ margin: '0 0 16px 0', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.45' }}>
                Nicket lagres bare i denne nettleseren. Ingen e-post, ingen innlogging.
              </p>
              <label className="profile-form">
                <span>Nick</span>
                <input
                  autoFocus
                  maxLength={24}
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      saveProfile();
                    }
                  }}
                  placeholder="For eksempel Lappeninja"
                />
              </label>
              <div className="profile-actions" style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <button
                  className="primary-action"
                  type="button"
                  onClick={saveProfile}
                  disabled={!canSaveProfile}
                >
                  Lagre
                </button>
                {profile ? (
                  <button
                    className="secondary-action"
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    Avbryt
                  </button>
                ) : null}
              </div>
              {profile ? (
                <div className="profile-stats" aria-label="Profilstatistikk" style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <span>{profile.gamesPlayed} runder</span>
                  <span>Beste {formatScore(profile.bestScore)}</span>
                  <span>Sist {formatScore(profile.lastScore)}</span>
                </div>
              ) : null}
              {profile ? (
                <button 
                  className="text-action" 
                  type="button" 
                  onClick={resetProfile}
                  style={{ marginTop: '16px', display: 'block', width: 'fit-content' }}
                >
                  Slett lokal profil
                </button>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
