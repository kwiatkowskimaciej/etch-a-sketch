const grid = document.querySelector('.grid');
let column;
let row;

for (let i = 0; i < 16; i++) {
  column = document.createElement('div');
  column.className = 'column';
  grid.appendChild(column);
  for (let j = 0; j < 16; j++) {
    row = document.createElement('div');
    row.className = 'row';
    column.appendChild(row);
  }
}
