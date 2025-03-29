import { cp } from 'node:fs/promises';
import path from 'node:path';

const srcPath = path.join(import.meta.dirname, 'files');
const destPath = path.join(import.meta.dirname, 'files_copy');

const copy = async () => {
  try {
    await cp(srcPath, destPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
