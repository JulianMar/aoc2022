import { readLines, printResult } from '../utils';

const score = readLines('./input.txt')
  .filter((row) => row !== '')
  .reduce((acc, cur) => {
    const first = cur.slice(0, cur.length / 2);
    const last = cur.slice(cur.length / 2);

    const duplicate = first
      .split('')
      .filter((value) => last.includes(value))[0];

    let score = duplicate.charCodeAt(0) - 64;

    if (score > 26) {
      score = score - 32;
    } else {
      score = score + 26;
    }

    return (acc += score);
  }, 0);

printResult(score);
