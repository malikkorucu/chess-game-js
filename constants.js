const data = []
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
let index = 0;
let black = false;
const pieces = [
    new Piece('', '♜', 5, ["A8", "H8", "A1", "H1"]),
    new Piece('', '♞', 5, ["B8", "G8", "B1", "G1"]),
    new Piece('', '♝', 5, ["C8", "F8", "C1", "F1"]),
    new Piece('', '♛', 5, ["D8", "D1"]),
    new Piece('', '♚', 5, ["E8", "E1"]),
    new Piece('', '♟︎', 5, ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7","A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"]),
]

const createSquares = () => {
    for (let i = 8; i > 0; i--) {
        letters.map(item => {
            data.push(new Square(1, i, item, "piece", "color"))
        })
    }
    //TODO : Daha iyi bir yöntem bul!!
    for (let y = 0; y < 64; y++) {
        data[y].id = y + 1
        data[y].color = black ? 'blue' : 'red'

        const piece = pieces.find(piece => piece.startLocations.includes(data[y].name))
        if (piece) {
            data[y].piece = piece
            let color = data[y].number > 5 ? "white" : "black"
            data[y].piece = { ...data[y].piece, color }
        }
        black = !black
        if ((y + 1) % 8 === 0) black = !black
    }

    //console.log(data)
    return data
}

const initPiecesToSquares = () => {

}

// // Black Pieces
// const leftBlackRook = new Piece("♜", 0);
// const leftBlackKnight = new Piece("♞", 1);
// const leftBlackBishop = new Piece("♝", 2);
// const blackQueen = new Piece("♛", 3);
// const blackKing = new Piece("♚", 4);
// const rightBlackBishop = new Piece("♝", 5);
// const rightBlackKnight = new Piece("♞", 6);
// const rightBlackRook = new Piece("♜", 7);
// const blackPawn = new Piece("♟︎", [8, 9, 10, 11, 12, 13, 14, 15]);

// // White Pieces
// const leftWhiteRook = new Piece("♖", 56);
// const leftWhiteKnight = new Piece("♘", 57);
// const leftWhiteBishop = new Piece("♗", 58);
// const whiteQueen = new Piece("♕", 59);
// const whiteKing = new Piece("♔", 60);
// const rightWhiteBishop = new Piece("♗", 61);
// const rightWhiteKnight = new Piece("♘", 62);
// const rightWhiteRook = new Piece("♖", 63);
// const whitePawn = new Piece("♙", [48, 49, 50, 51, 52, 53, 54, 55]);

// const pieces = [
//   leftBlackRook,
//   leftBlackKnight,
//   leftBlackBishop,
//   blackQueen,
//   blackKing,
//   rightBlackBishop,
//   rightBlackKnight,
//   rightBlackRook,
//   blackPawn,
//   leftWhiteRook,
//   leftWhiteKnight,
//   leftWhiteBishop,
//   whiteQueen,
//   whiteKing,
//   rightWhiteBishop,
//   rightWhiteKnight,
//   rightWhiteRook,
//   whitePawn,
// ];
