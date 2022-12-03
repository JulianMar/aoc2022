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
  Rock: 1,
  Paper: 2,
  Scissors: 3,
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

const determineB = (shouldBe: string, opponent: string) => {
  if (shouldBe === 'Y') {
    return opponent;
  }

  if (shouldBe === 'X') {
    const result = Object.values(types)
      .map((type) => {
        return [wins(opponent, type) === -1, type];
      })
      .filter((row) => row[0])[0][1];

    return result;
  }

  if (shouldBe === 'Z') {
    const result = Object.values(types)
      .map((type) => {
        return [wins(opponent, type) === 1, type];
      })
      .filter((row) => row[0])[0][1];

    return result;
  }
};

const score = readLines('./input.txt')
  .filter((row) => row !== '')
  .reduce((acc, cur) => {
    const game = cur.split(' ');

    const b = determineB(game[1], types[game[0]]);

    const won = wins(types[game[0]], b);

    const points = (won === 0 ? 3 : won === -1 ? 0 : 6) + pointKey[b];

    return (acc += points);
  }, 0);

printResult(score);
