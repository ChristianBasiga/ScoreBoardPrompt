import { Axios } from "axios";

export function useEnvironmentContext() {
  return {
    apiURL: process.env.API_URL,
    leaderBoardPath: "/score/leaderboard",
  };
}
