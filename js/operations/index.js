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
    data[y].color = black ? "blue" : "red";

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
