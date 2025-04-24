import { createWriteStream } from 'node:fs';
import path from 'node:path';

const write = async () => {
  const writable = createWriteStream(
    path.join(import.meta.dirname, 'files', 'fileToWrite.txt')
  );

  process.stdin.on('data', (userInput) => {
    writable.write(userInput);
  });
};

await write();
