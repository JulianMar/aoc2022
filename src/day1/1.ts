import { readLines, printResult } from '../utils';

const elfes = readLines('./input.txt', '\n\n')
  .map((elf) => elf.split('\n').reduce((acc, cur) => acc + Number(cur), 0))
  .sort((a, b) => a - b);

printResult(elfes.pop());
