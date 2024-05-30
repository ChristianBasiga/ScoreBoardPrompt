import { UserScore } from "./types";

export function sortByScore(a: UserScore, b: UserScore) {
  return a.score > b.score ? -1 : 1;
}
