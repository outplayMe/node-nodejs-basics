import { createWriteStream, createReadStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(
    path.join(import.meta.dirname, 'files', 'archive.gz')
  );
  const dest = createWriteStream(
    path.join(import.meta.dirname, 'fileToCompress.txt')
  );
  await pipeline(source, gunzip, dest);
};

await decompress();
