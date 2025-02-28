import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const decompress = async () => {
  const source = createReadStream(
    path.join(import.meta.dirname, 'files', 'archive.gz')
  );
  const dest = createWriteStream(
    path.join(import.meta.dirname, 'files', 'fileToCompress.txt')
  );
  const unzip = createUnzip();

  await pipeline(source, unzip, dest);
};

await decompress();
