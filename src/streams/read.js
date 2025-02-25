import { createReadStream } from 'node:fs';
import path from 'node:path';

const read = async () => {
  const readable = createReadStream(
    path.join(import.meta.dirname, 'files', 'fileToRead.txt')
  );

  readable.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readable.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
