import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversed =
        chunk.toString().trim().split('').reverse().join('') + '\n';

      callback(null, reversed);
    },
  });
  pipeline(process.stdin, reverseTransform, process.stdout, (err) => {
    if (err) console.error(err);
  });
};

await transform();
