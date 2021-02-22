const initData = () => {
  board.innerHTML = `
    ${squares
      .map(
        (el) => `
      <div class="square" 
      style="background-color:${el.color}">
      ${
        el.piece.type
          ? `<span style="color:${el.piece.color}">${el.piece.type}</span>`
          : ""
      }
    </div>`
      )
      .join("")}
  `;
};

initData();

//taşların oynama mantıgı
// ${el.piece ? `<span>${el.piece}</span>` : ''}
