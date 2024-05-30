import { useEffect, useState } from "react";
import { GameModeEnum, UserScore } from "../types";
import { useUserScore } from "./useUserScore";
import { groupBy } from "lodash";
import { sortByScore } from "../util";

type PropsT = {
  gameMode: GameModeEnum;
  startDate: Date;
  endDate: Date;
};

/**
 * Hook that leverages useUserScore hook but transforms it differently.
 */
export function useLeaderBoard({ gameMode, startDate, endDate }: PropsT) {
  const [leaderboard, setLeaderBoard] = useState<UserScore[]>([]);
  const defaultUserScores = useUserScore({ gameMode, startDate, endDate });

  useEffect(() => {
    const groupedByUserName = groupBy(defaultUserScores, "username");

    const leaderboard = Object.entries(groupedByUserName)
      .map(([key, value]) => {
        const sortedScores = value.sort(sortByScore);
        return {
          username: key,
          score: sortedScores[0].score,
          date: sortedScores[0].date,
        };
      })
      .sort(sortByScore);
    setLeaderBoard(leaderboard);
  }, [defaultUserScores, gameMode, startDate, endDate]);

  return leaderboard;
}
