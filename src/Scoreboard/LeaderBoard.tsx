import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "date-fns";
import { useLeaderBoard } from "../hooks/useLeaderBoard";
import { GameModeEnum, UserScore } from "../types";
import { ScoreBoard } from "./Scoreboard";

type PropsT = {
  gameMode: GameModeEnum;
  startDate: Date;
  endDate: Date;
};

/**
 * LeaderBoard, for displaying Scoreboard in specific way, for time sake nothing different atm
 * but just to show composability.
 */
export function LeaderBoard(props: PropsT) {
  const scoreBoard: UserScore[] = useLeaderBoard({
    gameMode: props.gameMode,
    startDate: props.startDate,
    endDate: props.endDate,
  });
  return (
    <>
      <ScoreBoard scoreBoard={scoreBoard} />
    </>
  );
}
