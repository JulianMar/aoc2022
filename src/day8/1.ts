import { readLines, printResult } from '../utils';

const map = readLines('./input.txt')
  .filter((row) => row !== '')
  .map((row) => {
    return row.split('');
  });

const checkSides = (x, y, height) => {
  if (x === 0 || y === 0 || map.length === x || map[0].length === y) {
    return true;
  }

  const row = map[x].map((row) => row < height);
  const rowRes = row.slice(0, y).every((row) => row === true);
  const rowRes2 = row.slice(y + 1).every((row) => row === true);

  if (rowRes || rowRes2) {
    return true;
  }

  const line = map.map((r) => r[y]).map((sub) => sub < height);
  const lineRes = line.slice(0, x).every((line) => line === true);
  const lineRes2 = line.slice(x + 1).every((line) => line === true);

  if (lineRes || lineRes2) {
    return true;
  }

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
