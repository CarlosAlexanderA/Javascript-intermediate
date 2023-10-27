// array con una tabla segun el tamaño
const createTable = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  );
};
class Knight {
  constructor() {
    this.moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
  }
}
class Board {
  constructor(num) {
    this.table = createTable(num);
  }
}
class gameBoard {
  constructor(start, end) {
    this.myBoard = new Board(8);
    this.knight = new Knight();
    this.start = start;
    this.end = end;
    this.myBoard.table[start[0]][start[1]] = 'x';
  }
  // detecta si se puede mover en esa direccion de la matriz
  // primero es el eje Y y luego el x
  moveInBoard(movement) {
    for (const move of this.knight.moves) {
      const [dy, dx] = move; // los movimiento de knight => [2,1]...etc
      const newX = this.start[0] + dx; // si se sale del tablero en el eje x
      const newY = this.start[1] + dy; // si se sale del tablero en el eje y

      if (
        newY >= 0 &&
        newY < this.myBoard.table.length &&
        newX >= 0 &&
        newX < this.myBoard.table[0].length
      ) {
        if (newX === movement[0] && newY === movement[1]) {
          this.myBoard.table[movement[0]][movement[1]] = 1;
          return true;
        }
      }
    }
    return false;
  }
}
const myGameBoard = new gameBoard([0, 0], [3, 3]);
console.log(myGameBoard.moveInBoard([2, 1]));
console.log(myGameBoard.myBoard);

// lo dejo aqui, porque no entiendo mucho 17/10/2023
