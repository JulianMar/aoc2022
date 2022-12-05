import { readLines, printResult } from '../utils';

const groups = readLines('./input.txt', '\n\n');

const getGroup = (row: string[]) => {
  const group = [];

  let count = 0;
  row.forEach((subRow, index) => {
    if (count === 4) {
      group.push('');
      group.push(subRow);
      count = 0;
      return;
    }
    if (subRow === '') {
      count++;
    } else {
      group.push(subRow);
    }
  });

  return group;
};

const stacks = groups[0]
  .split('\n')
  .reverse()
  .reduce((acc, row, currentIndex) => {
    if (currentIndex === 0) {
      row
        .split(' ')
        .filter((subRow) => subRow !== '')
        .forEach((subRow) => {
          acc[subRow] = [];
        });
    } else {
      const items = row.split(' ');
      if (items.some((row) => row === '')) {
        const group = getGroup(row.split(' '));

        group.forEach((subRow, index) => {
          if (subRow === '') {
            return;
          }

          acc[Object.keys(acc)[index]].push(subRow);
        });
      } else {
        items.forEach((item, index) => {
          acc[Object.keys(acc)[index]].push(item);
        });
      }
    }

    return acc;
  }, {});

console.log(stacks);

const score = groups[1].split('\n').map((row) => {
  const [_, amount, __, from, ___, to] = row
    .split(' ')
    .filter((subRow) => subRow !== '');

  for (let i = 0; i < Number(amount); i++) {
    const poped = stacks[from].pop();
    stacks[to].push(poped);
  }

  return '';
});

const result = Object.values(stacks).map((row) => row.pop());

printResult(
  result
    .join('')
    .split('')
    .filter((row) => row !== '[' && row !== ']')
    .join('')
);
