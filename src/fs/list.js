import { readdir } from 'node:fs/promises';
import path from 'node:path';

const srcPath = path.join(import.meta.dirname, 'files');

const list = async () => {
  try {
    const files = await readdir(srcPath, { recursive: true });
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
