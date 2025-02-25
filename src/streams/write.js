import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { stdin } from 'node:process';

const write = async () => {
  const writable = createWriteStream(
    path.join(import.meta.dirname, 'files', 'fileToWrite.txt')
  );

  stdin.on('data', (userInput) => {
    writable.write(userInput.toString());
  });
};

await write();
