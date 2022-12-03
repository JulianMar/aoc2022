import { readLines, printResult } from '../utils';
import { fileURLToPath } from 'url';

const types = {
  A: 'Rock',
  X: 'Rock',
  B: 'Paper',
  Y: 'Paper',
  C: 'Scissors',
  Z: 'Scissors',
};

const pointKey = {
  X: 1,
  Y: 2,
  Z: 3,
};

const wins = (a, b) => {
  if (a === b) {
    return 0;
  }

  if (a === 'Rock') {
    return b === 'Scissors' ? -1 : 1;
  }

  if (a === 'Paper') {
    return b === 'Rock' ? -1 : 1;
  }

  if (a === 'Scissors') {
    return b === 'Paper' ? -1 : 1;
  }
};

const score = readLines('./input.txt')
  .filter((row) => row !== '')
  .reduce((acc, cur) => {
    const game = cur.split(' ');

    const won = wins(types[game[0]], types[game[1]]);

    const points = (won === 0 ? 3 : won === -1 ? 0 : 6) + pointKey[game[1]];

    return (acc += points);
  }, 0);

printResult(score);
