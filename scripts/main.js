/* 1 - CREATE THE GRID */
var gridSize = prompt("How big do you want your grid to be?\ne.g. '8' will create an 8x8 grid", "8");

//Create grid
var container = document.getElementById("container");

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