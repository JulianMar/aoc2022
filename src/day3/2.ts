import { readLines, printResult } from '../utils';

const inbetween = readLines('./input.txt').filter((row) => row !== '');

const grouped = inbetween.reduce(
  (acc, cur) => {
    const current = acc[acc.length - 1];

    if (current.length === 3) {
      acc.push([cur]);
      return acc;
    }

    current.push(cur);

    acc[acc.length - 1] = current;

    return acc;
  },
  [[]]
);

const score = grouped.reduce((acc, cur) => {
  const [first, second, third] = cur;
  const duplicate = first
    .split('')
    .filter((value) => second.includes(value))
    .filter((value) => third.includes(value))[0];

  let score = duplicate.charCodeAt(0) - 64;

  if (score > 26) {
    score = score - 32;
  } else {
    score = score + 26;
  }

  return (acc += score);
}, 0);

printResult(score);
