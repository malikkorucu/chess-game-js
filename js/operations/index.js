board.addEventListener('click', (e) => {
  const target = e.target.closest(".square")
  const allElements = document.querySelectorAll('.square')
  let squareId;
  let activeElement;

  if (target.innerText) {
    squareId = target.getAttribute('square-id')
    activeElement = target
    const squaresTemp = [...squares]
    const currentSquare = squaresTemp.find((x, i) => x.id == squareId)
    currentSquare.piece = ""


    if (!target.classList.contains('selected')) {
      Array.from(allElements).map(x => x.classList.remove("selected"))
      activeElement = null
      target.classList.add('selected')
    } else {
      activeElement = target
      target.classList.remove('selected')
    }


    // console.log(activeElement)
    // initData(squaresTemp)
  }


})