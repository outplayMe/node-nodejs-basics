import { rm } from 'node:fs/promises';
import path from 'node:path';

const srcPath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(srcPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
