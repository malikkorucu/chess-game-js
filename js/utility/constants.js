const data = [];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pieces = [
  new Piece("", "♜", 5, ["A8", "H8", "A1", "H1"]),
  new Piece("", "♞", 5, ["B8", "G8", "B1", "G1"]),
  new Piece("", "♝", 5, ["C8", "F8", "C1", "F1"]),
  new Piece("", "♛", 5, ["D8", "D1"]),
  new Piece("", "♚", 5, ["E8", "E1"]),
  new Piece("", "♟︎", 5, [
    "A7",
    "B7",
    "C7",
    "D7",
    "E7",
    "F7",
    "G7",
    "H7",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
  ]),
];
const board = document.querySelector(".board");
const squares = createSquares();
