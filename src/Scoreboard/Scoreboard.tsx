import { formatDate } from "date-fns";
import { UserScore } from "../types";
import styled from "styled-components";

type PropsT = {
  scoreBoard: UserScore[];
};

const TableStyle = styled.table`
  background-color: #c0a99d;
`;

const TableHeaderRow = styled.thead`
  background-color: #73000d;
`;

const TableHeaders = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
`;

const TableDataCols = styled.td`
  color: black;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
`;

/**
 * Component for rendering scoreboard, regardless of output of the board itself.
 */
export function ScoreBoard({ scoreBoard }: PropsT) {
  return (
    <>
      <TableStyle>
        <TableHeaderRow>
          <tr>
            <TableHeaders>User</TableHeaders>
            <TableHeaders>Score</TableHeaders>
            <TableHeaders>Date</TableHeaders>
          </tr>
        </TableHeaderRow>
        <tbody>
          {scoreBoard.map((scoreRow) => (
            <tr key={scoreRow.username}>
              <TableDataCols>{scoreRow.username}</TableDataCols>
              <TableDataCols>{scoreRow.score}</TableDataCols>
              <TableDataCols>
                {formatDate(scoreRow.date, "yyyy/MM/dd")}
              </TableDataCols>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </>
  );
}
