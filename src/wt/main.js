import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
  const workerPath = path.join(import.meta.dirname, 'worker.js');
  const coresNumber = os.cpus().length;

  const createWorkerPromise = (offset) =>
    new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: { num: 10 + offset },
      });

      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
      });

      worker.on('error', (_) => {
        reject({ status: 'error', data: null });
      });
    });

  const workerPromises = [];
  for (let i = 0; i < coresNumber; i += 1) {
    workerPromises.push(createWorkerPromise(i));
  }

  Promise.all(workerPromises)
    .then((data) => console.log(data))
    .catch((err) => console.log('Promises rejected, result:\n', err));
};

await performCalculations();
