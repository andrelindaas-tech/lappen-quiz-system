import { trafficSigns, type TrafficSign } from '../trafficSigns';

export type SignSpeedPrompt = {
  id: string;
  claim: string;
  correctCode: string;
  distractorCodes?: string[];
  explanation?: string;
};

export type SignSpeedRound = {
  id: string;
  claim: string;
  correctSign: TrafficSign;
  options: TrafficSign[];
  explanation: string;
};

export const ROUND_START_MS = 7040;
export const ROUND_MIN_MS = 3630;

export const signSpeedPrompts: SignSpeedPrompt[] = [
  {
    id: 'yield-main-road',
    claim: 'Du har vikeplikt for trafikk på kryssende veg.',
    correctCode: '202',
    distractorCodes: ['204', '206', '210'],
  },
  {
    id: 'full-stop',
    claim: 'Du skal stanse helt før du kjører videre.',
    correctCode: '204',
    distractorCodes: ['202', '206', '302'],
  },
  {
    id: 'priority-road',
    claim: 'Trafikk fra sideveg har vikeplikt for deg.',
    correctCode: '206',
    distractorCodes: ['208', '210', '202'],
  },
  {
    id: 'give-way-oncoming',
    claim: 'Du må vike for møtende kjørende på smal veg.',
    correctCode: '212',
    distractorCodes: ['214', '148', '106.1'],
  },
  {
    id: 'oncoming-yields',
    claim: 'Møtende kjørende har vikeplikt for deg.',
    correctCode: '214',
    distractorCodes: ['212', '148', '106.1'],
  },
  {
    id: 'no-entry',
    claim: 'Det er forbudt å kjøre inn her.',
    correctCode: '302',
    distractorCodes: ['306.0', '330.1', '332'],
  },
  {
    id: 'no-vehicles',
    claim: 'Forbudet gjelder alle kjøretøy.',
    correctCode: '306.0',
    distractorCodes: ['302', '306.1', '306.6'],
  },
  {
    id: 'no-motor-vehicles',
    claim: 'Forbudt for motorvogn.',
    correctCode: '306.1',
    distractorCodes: ['306.0', '306.6', '306.8'],
  },
  {
    id: 'hazardous-goods',
    claim: 'Forbudt for transport av farlig gods.',
    correctCode: '308',
    distractorCodes: ['306.1', '312', '314'],
  },
  {
    id: 'no-overtaking',
    claim: 'Forbudt å kjøre forbi motorvogn med flere enn to hjul.',
    correctCode: '334',
    distractorCodes: ['335', '336', '337'],
  },
  {
    id: 'speed-limit-50',
    claim: 'Høyeste tillatte fart er 50 km/t.',
    correctCode: '362',
    distractorCodes: ['364', '366', '368'],
  },
  {
    id: 'no-parking',
    claim: 'Det er forbudt å parkere.',
    correctCode: '372',
    distractorCodes: ['370', '552', '806'],
  },
  {
    id: 'mandatory-right',
    claim: 'Du skal svinge til høyre.',
    correctCode: '402.2',
    distractorCodes: ['402.3', '402.1', '330.1'],
  },
  {
    id: 'mandatory-left',
    claim: 'Du skal svinge til venstre.',
    correctCode: '402.3',
    distractorCodes: ['402.2', '402.1', '330.2'],
  },
  {
    id: 'mandatory-roundabout',
    claim: 'Følg pilene rundt trafikkøya.',
    correctCode: '406',
    distractorCodes: ['126', '408', '402.1'],
  },
  {
    id: 'warning-roundabout',
    claim: 'Varsler at du nærmer deg rundkjøring.',
    correctCode: '126',
    distractorCodes: ['406', '408', '124'],
  },
  {
    id: 'children',
    claim: 'Varsler sted der barn ofte ferdes.',
    correctCode: '142',
    distractorCodes: ['140', '516', '518'],
  },
  {
    id: 'pedestrian-crossing-warning',
    claim: 'Varsler at du nærmer deg gangfelt.',
    correctCode: '140',
    distractorCodes: ['142', '516', '518'],
  },
  {
    id: 'slippery-road',
    claim: 'Varsler fare for glatt kjørebane.',
    correctCode: '116',
    distractorCodes: ['108', '112', '110'],
  },
  {
    id: 'road-works',
    claim: 'Varsler vegarbeid på eller ved vegen.',
    correctCode: '110',
    distractorCodes: ['108', '112', '153'],
  },
  {
    id: 'traffic-lights',
    claim: 'Varsler trafikklyssignal foran.',
    correctCode: '132',
    distractorCodes: ['124', '153', '149'],
  },
  {
    id: 'motorway',
    claim: 'Her begynner motorveg.',
    correctCode: '502',
    distractorCodes: ['503', '504', '505'],
  },
  {
    id: 'bus-stop',
    claim: 'Holdeplass for buss.',
    correctCode: '512',
    distractorCodes: ['514', '605', '502'],
  },
  {
    id: 'pedestrian-crossing-info',
    claim: 'Viser hvor gangfeltet ligger.',
    correctCode: '516',
    distractorCodes: ['140', '518', '522'],
  },
  {
    id: 'petrol-station',
    claim: 'Viser drivstoff eller bensinstasjon.',
    correctCode: '610',
    distractorCodes: ['512', '514', '605'],
  },
];

const signByCode = new Map(trafficSigns.map((sign) => [sign.code, sign]));

export const shuffleSignSpeedItems = <T>(items: readonly T[]): T[] => {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
};

const uniqueSigns = (signs: TrafficSign[]) => {
  const seen = new Set<string>();

  return signs.filter((sign) => {
    if (seen.has(sign.code)) {
      return false;
    }

    seen.add(sign.code);
    return true;
  });
};

const getDistractors = (prompt: SignSpeedPrompt, correctSign: TrafficSign) => {
  const curated = (prompt.distractorCodes ?? [])
    .map((code) => signByCode.get(code))
    .filter((sign): sign is TrafficSign => Boolean(sign));

  const sameCategory = trafficSigns.filter(
    (sign) => sign.code !== correctSign.code && sign.category === correctSign.category,
  );

  const rest = trafficSigns.filter((sign) => sign.code !== correctSign.code);

  return uniqueSigns([
    ...curated,
    ...shuffleSignSpeedItems(sameCategory),
    ...shuffleSignSpeedItems(rest),
  ]).slice(0, 3);
};

export const buildSignSpeedRound = (prompt: SignSpeedPrompt): SignSpeedRound | null => {
  const correctSign = signByCode.get(prompt.correctCode);

  if (!correctSign) {
    return null;
  }

  const distractors = getDistractors(prompt, correctSign);

  if (distractors.length < 3) {
    return null;
  }

  return {
    id: prompt.id,
    claim: prompt.claim,
    correctSign,
    options: shuffleSignSpeedItems([correctSign, ...distractors]),
    explanation: prompt.explanation ?? correctSign.shortExplanation,
  };
};

export const getSignSpeedRounds = () =>
  signSpeedPrompts
    .map((prompt) => buildSignSpeedRound(prompt))
    .filter((round): round is SignSpeedRound => Boolean(round));

export const getRoundDuration = (roundIndex: number) =>
  Math.max(ROUND_MIN_MS, ROUND_START_MS - roundIndex * 130);

export const getAnswerScore = (remainingMs: number, durationMs: number, streak: number) => {
  const speedRatio = Math.max(0, Math.min(1, remainingMs / durationMs));
  const speedPoints = Math.round(280 + speedRatio * 820);
  const streakBonus = Math.min(streak, 18) * 35;

  return speedPoints + streakBonus;
};
