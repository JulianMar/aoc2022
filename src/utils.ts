import fs from 'node:fs';

export const readString = (path: string): string =>
  fs.readFileSync(path).toString();

export const readLines = (path: string, splitValue = '\n'): string[] =>
  readString(path).split(splitValue);

export const printResult = (result: any): void =>
  console.log('result: ', result);
