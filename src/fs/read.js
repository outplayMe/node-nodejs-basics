import { readFile } from 'node:fs/promises';
import path from 'node:path';

const srcPath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await readFile(srcPath, { encoding: 'utf8' });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
