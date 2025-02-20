import { rename } from 'node:fs/promises';
import path from 'node:path';

const srcPath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
const renamedPath = path.join(
  import.meta.dirname,
  'files',
  'properFilename.md'
);

const renameFile = async () => {
  try {
    await rename(srcPath, renamedPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await renameFile();
