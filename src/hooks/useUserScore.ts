/**
 * Hook for reading and updating user score.
 */

import { useEffect, useState } from "react";
import { GameModeEnum, UserScore } from "../types";
import { sortByScore } from "../util";

const mockUserScoresMap: Map<GameModeEnum, UserScore[]> = new Map([
  [
    GameModeEnum.DAILY,
    [
      {
        username: "Christian",
        score: 100,
        date: new Date(),
      },
      {
        username: "Sami",
        score: 700,
        date: new Date(2024, 4, 28),
      },
      { username: "Sami", score: 1200, date: new Date(2024, 4, 26) },
      {
        username: "Sami",
        score: 2500,
        date: new Date(2024, 4, 16),
      },
    ],
  ],
  [
    GameModeEnum.EPIC,
    [
      {
        username: "Christian",
        score: 200,
        date: new Date(),
      },
      {
        username: "Anon",
        score: 1200,
        date: new Date(2024, 4, 23),
      },
    ],
  ],

  [
    GameModeEnum.ZEN,
    [
      {
        username: "Angela",
        score: 400,
        date: new Date(2024, 4, 25),
      },
      {
        username: "Sami",
        score: 600,
        date: new Date(2024, 4, 28),
      },
    ],
  ],
]);

type PropsT = {
  gameMode: GameModeEnum;
  startDate: Date;
  endDate: Date;
};
export function useUserScore({ gameMode, startDate, endDate }: PropsT) {
  const [userScore, setUserScore] = useState<UserScore[]>();

  useEffect(() => {
    const data = mockUserScoresMap.get(gameMode);

    const userScoresBetweenDateRange = data?.filter(
      (score) => startDate <= score.date && endDate >= score.date
    );

    const sortedByScore = userScoresBetweenDateRange?.sort(sortByScore);

    setUserScore(sortedByScore);
  }, [gameMode, startDate, endDate]);

  return userScore;
}
