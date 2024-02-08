const grid = document.querySelector('.grid');
const button = document.querySelector('button');
let numberOfSquares;
let column;
let row;

function createGrid(numberOfSquaresPerSide) {
  for (let i = 0; i < numberOfSquaresPerSide; i++) {
    column = document.createElement('div');
    column.className = 'column';
    grid.appendChild(column);
    for (let j = 0; j < numberOfSquaresPerSide; j++) {
      row = document.createElement('div');
      row.className = 'row';
      column.appendChild(row);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function changeNumberOfSquares() {
  do {
    numberOfSquares = prompt('Enter number of squares per side');
    if (numberOfSquares == null) return;
    numberOfSquares = parseInt(numberOfSquares);
  } while (numberOfSquares < 1 || numberOfSquares > 100);
  removeAllChildNodes(grid);
  createGrid(numberOfSquares);
}

function randomRGB() {
  return Math.floor(Math.random() * 255) + 1;
}

let shadeCounter = 0;
let increment = 1;

function updateShadeCounter() {
  shadeCounter += increment;
  if (shadeCounter > 10 || shadeCounter < 0) {
    increment *= -1;
    shadeCounter += increment;
  }
}

grid.addEventListener('mouseover', (event) => {
  const target = event.target;
  updateShadeCounter();
  backgroundColor = `color-mix(in srgb, black ${
    shadeCounter * 10
  }%, rgb(${randomRGB()} ${randomRGB()} ${randomRGB()}) )`;
  target.style.backgroundColor = backgroundColor;
});

button.addEventListener('click', changeNumberOfSquares);

createGrid(16);
