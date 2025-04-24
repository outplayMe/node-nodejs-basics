import { rename as fsRename } from 'node:fs/promises';
import path from 'node:path';

const oldPath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(import.meta.dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fsRename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
