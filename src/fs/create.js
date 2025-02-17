import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;
const dest = path.join(dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(dest, data, { flag: 'wx' });
    console.log('File has been successfully created');
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await create();
