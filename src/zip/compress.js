import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const compress = async () => {
  const source = createReadStream(
    path.join(import.meta.dirname, 'files', 'fileToCompress.txt')
  );
  const dest = createWriteStream(
    path.join(import.meta.dirname, 'files', 'archive.gz')
  );
  const gzip = createGzip();

  await pipeline(source, gzip, dest);
};

await compress();
