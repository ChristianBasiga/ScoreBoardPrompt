import { useState } from "react";
import { ScoreBoard } from "./Scoreboard/Scoreboard";
import { addDays, endOfWeek, startOfWeek } from "date-fns";
import "./App.css";
import { GameModeEnum } from "./types";
import { ScoresPage } from "./Scoreboard/ScoresPage";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <ScoresPage />
    </>
  );
}

export default App;
