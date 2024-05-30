import { startOfWeek, endOfWeek } from "date-fns";
import { useState } from "react";
import { GameModeEnum, ScoreboardEnum, ScoreboardEnumToLabel } from "../types";
import styled from "styled-components";
import { LeaderBoard } from "./LeaderBoard";
import ReactDatePicker from "react-datepicker";
import { ScoreBoard } from "./Scoreboard";
import { useUserScore } from "../hooks/useUserScore";

const FlexBox = styled.div<{
  align?: string;
  gap: number;
  direction: "row" | "column";
}>`
  display: flex;
  gap: ${($props) => $props.gap}px;
  flex-direction: ${($props) => $props.direction};
  align: ${($props) => $props.align ?? "flex-start"};
`;

const StyledTabButton = styled.button<{ active: boolean }>`
  border-radius: 8px;
  border: black 1px solid;
  background-color: ${($props) => ($props.active ? "#73000d" : "#c0a99d")};
  color: ${($props) => ($props.active ? "white" : "black")};
`;

const StyledLabel = styled.label`
  border-radius: 8px;
  background-color: #73000d;
  color: white;
  padding: 8px;
  line-height: 5px;
`;

const Container = styled.div`
  border-radius: 10px;
  background-color: #c0a99d;
  padding: 32px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const FieldsContainer = styled(FlexBox)`
  padding-bottom: 64px;
`;

/**
 * Page for displaying scores in different ways
 */
export function ScoresPage() {
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(endOfWeek(new Date()));
  const [selectedGameMode, setSelectedGameMode] = useState<GameModeEnum>(
    GameModeEnum.DAILY
  );

  const [selectedScoreboardType, setSelectedScoreboardType] =
    useState<ScoreboardEnum>(ScoreboardEnum.SCORE_BOARD);

  const defaultScoreboard = useUserScore({
    gameMode: selectedGameMode,
    startDate,
    endDate,
  });

  return (
    <Container>
      <FlexBox gap={8} direction="column">
        <FieldsContainer gap={8} direction="column">
          <FlexBox gap={8} direction="row" style={{ justifyContent: "center" }}>
            <FlexBox gap={8} direction="row">
              <StyledLabel>Start Date</StyledLabel>
              <div>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>
            </FlexBox>
            <FlexBox gap={8} direction="row">
              <StyledLabel>End Date</StyledLabel>
              <div>
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                />
              </div>
            </FlexBox>
          </FlexBox>
        </FieldsContainer>

        <FlexBox
          gap={8}
          direction="column"
          style={{ justifyContent: "center" }}
        >
          <h2>
            {ScoreboardEnumToLabel[selectedScoreboardType]} for Game Mode{" "}
            {selectedGameMode}
          </h2>
        </FlexBox>

        <FlexBox gap={4} direction="column">
          <h3> Select Game Mode</h3>
          <FlexBox gap={8} direction="row" style={{ justifyContent: "center" }}>
            {Object.values(GameModeEnum).map((gamemode) => {
              return (
                <StyledTabButton
                  key={gamemode}
                  active={selectedGameMode === gamemode}
                  onClick={() => setSelectedGameMode(gamemode)}
                >
                  {gamemode}
                </StyledTabButton>
              );
            })}
          </FlexBox>
        </FlexBox>

        <FlexBox gap={4} direction="column">
          <h3> Select Display Type</h3>
          <FlexBox gap={8} direction="row" style={{ justifyContent: "center" }}>
            {Object.values(ScoreboardEnum).map((scoreboard) => {
              return (
                <StyledTabButton
                  key={scoreboard}
                  active={selectedScoreboardType === scoreboard}
                  onClick={() => setSelectedScoreboardType(scoreboard)}
                >
                  {ScoreboardEnumToLabel[scoreboard]}
                </StyledTabButton>
              );
            })}
          </FlexBox>
        </FlexBox>

        {selectedScoreboardType === ScoreboardEnum.SCORE_BOARD && (
          <ScoreBoard scoreBoard={defaultScoreboard ?? []} />
        )}

        {selectedScoreboardType === ScoreboardEnum.LEADER_BOARD && (
          <LeaderBoard
            gameMode={selectedGameMode}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </FlexBox>
    </Container>
  );
}
