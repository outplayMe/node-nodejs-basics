import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const calculateHash = async () => {
  const hash = createHash('sha256');

  const input = createReadStream(
    path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt')
  );

  input.on('readable', () => {
    const data = input.read();

    if (data) {
      hash.update(data);
    } else {
      console.log('sha-256 hash of your file:\n', hash.digest('hex'));
    }
  });
};

await calculateHash();
