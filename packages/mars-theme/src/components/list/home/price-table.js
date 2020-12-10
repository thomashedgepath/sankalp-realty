import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect, styled, decode } from "frontity";

export default function PriceTable(props) {
  return (
    <RoundPaper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeaderCell
              align="center"
              colSpan={2}
              color={props.headerColor}
            >{props.tableHeader}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableOpacity>
          <TableRow>
            <SecondaryHeaderCell align="center">
              {props.headerRow[0]}
            </SecondaryHeaderCell>
            <SecondaryHeaderCell align="center">
              {props.headerRow[1]}
            </SecondaryHeaderCell>
          </TableRow>
          {props.rows.map((row) => (
            <TableRow key={row.title}>
              <MainCell align="center">{row.title}</MainCell>
              <MainCell align="center">{row.price}</MainCell>
            </TableRow>
          ))}
        </TableOpacity>
      </Table>
    </RoundPaper>
  );
}

const RoundPaper = styled(TableContainer)`
  border-radius: 20px !important;
  overflow: hidden !important;
  width: 100%;
  height: 100%;
`;
const TableOpacity = styled(TableBody)`
  opacity: 0.7 !important;
  border-radius: 20px !important;
`;
const TableHeaderCell = styled(TableCell)`
  background-color: ${(props) => (props.color ? props.color : "black")};
  color: white !important;
  font-size: 1.9vw !important;
  height: 2vw !important;
  text-transform: uppercase !important;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 5vw !important;
    padding: 10px !important;
  }
`;

const SecondaryHeaderCell = styled(TableCell)`
  font-size: 1.2vw !important;
  background-color: white !important;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 4vw !important;
    padding: 10px !important;
  }
`;

const MainCell = styled(TableCell)`
  font-size: 1vw !important;
  background-color: white !important;

  @media (max-width: 768px) {
    font-size: 3.5vw !important;
    padding: 10px !important;
  }
`;
