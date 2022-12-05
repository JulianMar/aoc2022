import { readLines, printResult } from '../utils';

const score = readLines('./input.txt')
  .filter((row) => row !== '')
  .reduce((acc, row) => {
    const [first, second] = row
      .split(',')
      .map((subRow) => subRow.split('-').map(Number));

    if (first[0] <= second[0] && first[1] >= second[1]) {
      return acc + 1;
    }

    if (first[0] >= second[0] && first[1] <= second[1]) {
      return acc + 1;
    }

    return acc;
  }, 0);

printResult(score);
