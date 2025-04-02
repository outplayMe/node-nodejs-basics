import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    path.join(import.meta.dirname, 'files', 'fileToCompress.txt')
  );
  const dest = createWriteStream(
    path.join(import.meta.dirname, 'files', 'archive.gz')
  );
  await pipeline(source, gzip, dest);
};

await compress();
