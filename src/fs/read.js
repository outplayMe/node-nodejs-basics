import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

  try {
    const contents = await readFile(filePath, { encoding: 'utf-8' });
    console.log(contents);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
