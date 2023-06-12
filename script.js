const container = document.querySelector(".container");

let columns = 30;
let rows = columns / 2;

function createGrid(columns, rows) {
  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < rows; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    container.appendChild(column);
  }
  clickOnClear(); //Initialize the button Clear function
}

function start() {
  const square = document.querySelectorAll(".row");

  square.forEach((row) => {
    row.addEventListener("click", () => {
      paint();
    });
  });
}

function paint() {
  const square = document.querySelectorAll(".row");

  square.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.cssText = "border-color: black;";
      row.style.backgroundColor = "black";
    });
  });
}

function clear () {
    const square = document.querySelectorAll(".row");

    square.forEach((row) => {
      row.style.cssText = "lightgrey";
      row.style.backgroundColor = "lightcyan";
    });

}

function clickOnClear () {
    const button = document.querySelector("#clear-button");
    button.addEventListener("click", () => {
      clear();
    });
    start() //To start again the click to draw
}

createGrid(columns, rows);
start();






// let squareAmount = 16;
// for (let i = 0; i < squareAmount; i++){
//     const grid = document.createElement('div');
//     let w =container.offsetWidth/ Math.sqrt(squareAmount);
//     let h = container.offsetHeight /Math.sqrt(squareAmount) ;
//     grid.classList.add('square');
//     grid.style.color ='red';
//     grid.textContent = 'hello';
//     grid.style.cssText = "width:" + w + "px;"
//     grid.style.cssText = "height:" + h + "px;"

//     container.appendChild(grid);

//     // console.log(1238/squareAmount,600/squareAmount);
// }

// const grid = document.querySelector('square');
// grid.
