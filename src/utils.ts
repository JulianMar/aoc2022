import fs from 'node:fs';
import process from 'node:process';
import { fileURLToPath } from 'url';
export const readString = (path: string): string =>
  fs.readFileSync(path).toString();

export const readLines = (path: string, splitValue = '\n'): string[] => {
  const __filename = fileURLToPath(import.meta.url);

  console.log('filename: ', __filename);
  return readString(path).split(splitValue);
};

export const printResult = (result: any): void =>
  console.log(
    'result: ',
    result
    // ' in seconds: ', process.uptime()
  );
