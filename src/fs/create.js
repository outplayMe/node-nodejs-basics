import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = path.join(import.meta.dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, content, { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') throw new Error('FS operation failed');
  }
};

await create();
