/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

 1 2 3
 4 5 6
 9 8 9

 left to right diagonal = 1 + 5 + 9 = 15
 right to left diagonal = 3 + 5 + 9 = 17

 |15-17| = 2


 sample input =  [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
*/
function diagonalDifference(arr) {
  let matrixSize = arr[0].length;

  let lefToRightDiagonal = [];
  let rightToLeftDiagonel = [];

  for (let i = 0; i < matrixSize; i++) {
    lefToRightDiagonal.push(arr[i][i]);
  }

  for (let i = 0; i < matrixSize; i++) {
    rightToLeftDiagonel.push(arr[i][matrixSize - (i + 1)]);
  }

  let result = Math.abs(
    [...rightToLeftDiagonel].reduce((x, y) => x + y) -
      [...lefToRightDiagonal].reduce((x, y) => x + y)
  );

  return result;
}
