import { readLines, printResult } from '../utils';

const map = readLines('./input-test.txt')
  .filter((row) => row !== '')
  .map((row) => {
    return row.split('');
  });

const checkSides = (x, y, height) => {
  if (x === 0 || y === 0 || map.length === x || map[0].length === y) {
    return true;
  }

  const row = map[x].map((row) => row < height);
  const rowRes = row
    .slice(0, y)
    .reverse()
    .every((row) => row === true);
  const rowRes2 = row.slice(y + 1).every((row) => row === true);

  if (rowRes || rowRes2) {
    return true;
  }

  const line = map.map((r) => r[y]).map((sub) => sub < height);
  const lineRes = line
    .slice(0, x)
    .reverse()
    .map((line) => line === true);
  const lineRes2 = line.slice(x + 1).map((line) => line === true);

  console.log(lineRes, lineRes2);

  return false;
};

const countTrees = (map) => {
  let trees = 0;
  map.forEach((row, x) => {
    row.forEach((height, y) => {
      const res = checkSides(x, y, height);
      if (res) {
        trees++;
      }
    });
  });

  return trees;
};

const result = countTrees(map);

printResult(result);
