export type LocalProfile = {
  id: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  gamesPlayed: number;
  bestScore: number;
  lastScore: number;
};

export type LocalProfileGameResult = {
  score: number;
};

const PROFILE_STORAGE_KEY = 'teori-test.localProfile.v1';

const isProfile = (value: unknown): value is LocalProfile => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const profile = value as Partial<LocalProfile>;

  return (
    typeof profile.id === 'string' &&
    typeof profile.nickname === 'string' &&
    typeof profile.createdAt === 'string' &&
    typeof profile.updatedAt === 'string' &&
    typeof profile.gamesPlayed === 'number' &&
    typeof profile.bestScore === 'number' &&
    typeof profile.lastScore === 'number'
  );
};

const createProfileId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

const normalizeNickname = (nickname: string) => nickname.trim().replace(/\s+/g, ' ').slice(0, 24);

export const loadLocalProfile = (): LocalProfile | null => {
  try {
    const rawProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);

    if (!rawProfile) {
      return null;
    }

    const parsedProfile = JSON.parse(rawProfile);

    return isProfile(parsedProfile) ? parsedProfile : null;
  } catch {
    return null;
  }
};

export const saveLocalProfile = (profile: LocalProfile) => {
  window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
};

export const createLocalProfile = (nickname: string): LocalProfile => {
  const now = new Date().toISOString();

  return {
    id: createProfileId(),
    nickname: normalizeNickname(nickname),
    createdAt: now,
    updatedAt: now,
    gamesPlayed: 0,
    bestScore: 0,
    lastScore: 0,
  };
};

export const renameLocalProfile = (profile: LocalProfile, nickname: string): LocalProfile => ({
  ...profile,
  nickname: normalizeNickname(nickname),
  updatedAt: new Date().toISOString(),
});

export const recordLocalProfileGame = (
  profile: LocalProfile,
  result: LocalProfileGameResult,
): LocalProfile => ({
  ...profile,
  updatedAt: new Date().toISOString(),
  gamesPlayed: profile.gamesPlayed + 1,
  bestScore: Math.max(profile.bestScore, result.score),
  lastScore: result.score,
});

export const clearLocalProfile = () => {
  window.localStorage.removeItem(PROFILE_STORAGE_KEY);
};

export const isValidNickname = (nickname: string) => normalizeNickname(nickname).length >= 2;

export type ScoreboardEntry = {
  id: string;
  nickname: string;
  score: number;
  streak: number;
  roundsAnswered: number;
  date: string;
};

const SCOREBOARD_STORAGE_KEY = 'teori-test.signSpeedGame.scoreboard.v1';

export const loadScoreboard = (): ScoreboardEntry[] => {
  try {
    const raw = window.localStorage.getItem(SCOREBOARD_STORAGE_KEY);
    if (!raw) return [];
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved)) return [];
    // Exclude previously seeded demo entries; retain actual local results.
    return saved.filter((entry): entry is ScoreboardEntry =>
      entry && typeof entry.id === 'string' && !/^mock-[1-5]$/.test(entry.id));
  } catch {
    return [];
  }
};

export const addScoreToScoreboard = (
  nickname: string,
  score: number,
  streak: number,
  roundsAnswered: number
): ScoreboardEntry[] => {
  const scoreboard = loadScoreboard();
  const newEntry: ScoreboardEntry = {
    id: createProfileId(),
    nickname: nickname.trim() || 'Anonym',
    score,
    streak,
    roundsAnswered,
    date: new Date().toISOString(),
  };

  const updated = [...scoreboard, newEntry]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  try {
    window.localStorage.setItem(SCOREBOARD_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save scoreboard', e);
  }

  return updated;
};
