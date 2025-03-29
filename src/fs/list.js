import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  const dirPath = path.join(import.meta.dirname, 'files');

  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
