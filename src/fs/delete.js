import { rm } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
