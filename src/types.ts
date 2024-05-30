export const GameModeEnum = {
  DAILY: "DAILY",
  EPIC: "EPIC",
  ZEN: "ZEN",
} as const;

export type GameModeEnum = keyof typeof GameModeEnum;

export const ScoreboardEnum = {
  SCORE_BOARD: "SCORE_BOARD",
  LEADER_BOARD: "LEADER_BOARD",
  // Not implementing but would filter based on logged in player.
  //PLAYER_SCORES: "PLAYER_SCORES",
} as const;

export type ScoreboardEnum = keyof typeof ScoreboardEnum;

export type UserScore = {
  username: string;
  score: number;
  date: Date;
};

export const ScoreboardEnumToLabel: Record<ScoreboardEnum, string> = {
  [ScoreboardEnum.SCORE_BOARD]: "Score Board",
  [ScoreboardEnum.LEADER_BOARD]: "Leader Board",
  //  [ScoreboardEnum.PLAYER_SCORES]: "Your Scores",
};
