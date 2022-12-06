import { readLines, printResult } from '../utils';

let score = 0;
readLines('./input.txt')
  .filter((row) => row !== '')[0]
  .split('')
  .every((row, index, array) => {
    if (index < 3) {
      return true;
    }

    const buffer = array.slice(index - 3, index);
    buffer.push(row);

    if (
      !buffer.every(
        (row) =>
          buffer.reduce((acc, cur) => {
            if (row === cur) {
              acc += 1;
            }
            return acc;
          }, 0) <= 1
      )
    ) {
      return true;
    }

    if (buffer.length === 4) {
      console.log(buffer, index);
      score = index + 1;
      return false;
    }

    return true;
  });

printResult(score);
