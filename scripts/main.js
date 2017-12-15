/* 1 - CREATE THE GRID */
var gridSize = prompt("How big do you want your grid to be?\ne.g. '8' will create an 8x8 grid", "8");
var checkInput = function() {
  while(gridSize.isNaN || gridSize % 1 !== 0 || gridSize > 200 || gridSize < 0) {
  gridSize = prompt("Try again! Please use only whole numbers (integers) from 0 - 200!");
  }
};
//Create grid
var container = document.getElementById("container");

var createGrid = function () {
  checkInput();
  for(let rowPosition = 1; rowPosition <= gridSize; rowPosition++) {
    let newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.id = `row-${rowPosition}`;
    container.appendChild(newDiv);
  
    for(let colPosition = 1; colPosition <= gridSize; colPosition++) {
      let newSquare = document.createElement("div");
      let rowElement = document.getElementById(`row-${rowPosition}`)
        newSquare.className = "col";
        newSquare.id = `col-${colPosition}`;
        rowElement.appendChild(newSquare);
    };
  };
};
createGrid();

//Change color on hover
var drawOnHover = function() {
  let squares = document.querySelectorAll(".col");
  squares.forEach((div) => {
    let rgbArray = [];
    function makeRandomColor(){
      let rgb1 = Math.floor(Math.random() * 256);
      let rgb2 = Math.floor(Math.random() * 256);
      let rgb3 = Math.floor(Math.random() * 256);
      rgbArray = [(rgb1 + 30), (rgb2 + 30), (rgb3 + 30)]; //+30 ensures returning 'original' value initially in next step
    };
    makeRandomColor();
    div.addEventListener("mouseout", (e) => {
      rgbArray = rgbArray.map(x => x - 30);
      let squareColor = "background-color: rgb(" + rgbArray.join(", ") + ")";
      div.setAttribute("style", squareColor);
    });
  });
}
drawOnHover();

//Reset button
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", (e) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  gridSize = prompt("How big do you want your new grid to be?");
  createGrid();
  drawOnHover();
});
