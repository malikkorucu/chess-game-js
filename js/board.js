const createSquares = () => {
  let black = false;
  for (let i = 8; i > 0; i--) {
    letters.map((item) => {
      data.push(new Square(1, i, item, "piece", "color"));
    });
  }
  //TODO : Daha iyi bir yöntem bul!!
  for (let y = 0; y < 64; y++) {
    data[y].id = y + 1;
    data[y].color = black ? "#EBECD0" : "#779556";

    const piece = pieces.find((piece) =>
      piece.startLocations.includes(data[y].name)
    );
    if (piece) {
      data[y].piece = piece;
      let color = data[y].number > 5 ? "white" : "black";
      data[y].piece = { ...data[y].piece, color };
    }
    black = !black;
    if ((y + 1) % 8 === 0) black = !black;
  }

  //console.log(data)

  return data;
};

let squares = createSquares()

const initData = (squareArr) => {
  squares = []
  squareArr.forEach(el => (squares.push(el)))

  console.log(squares)

  board.innerHTML = `
    ${squares
      .map(
        (el) => `
          <div class="square" 
          square-id="${el.id}"
          style="background-color:${el.color}">
           <div style="font-size:30px">${el.piece.type ? el.piece.type : ''}</div>
          </div>`
      )
      .join("")}
  `;
};

initData(squares);

// ${el.piece.type
//   ? `<span class="pieceArea" style="color:${el.piece.color}">
// ${el.piece.type}
// </span>`
//   : ""
// }

{/* <div style="font-size:20px">${el.id} - ${el.name}</div> */}
//taşların oynama mantıgı
// ${el.piece ? `<span>${el.piece}</span>` : ''}

