/* 1 - CREATE THE GRID */
var gridSize = prompt("How big do you want your grid to be?\ne.g. '8' will create an 8x8 grid", "8");

//Create grid
var container = document.getElementById("container");

var createGrid = function () {
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
    div.addEventListener("mouseover", (e) => {
      div.classList.add("change-color");
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

