import { readLines, printResult } from '../utils';

const score = readLines('./input.txt')
  .filter((row) => row !== '')
  .reduce((acc, row) => {
    const [first, second] = row
      .split(',')
      .map((subRow) => subRow.split('-').map(Number))
      .map((subRow) =>
        Array.from(
          { length: subRow[1] - subRow[0] + 1 },
          (_, i) => i + subRow[0]
        )
      );

    if (first.some((num) => second.includes(num))) {
      return acc + 1;
    }

    return acc;
  }, 0);

printResult(score);
