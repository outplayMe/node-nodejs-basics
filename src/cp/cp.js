import { fork } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  // Write your code here
  const filePath = path.join(import.meta.dirname, 'files', 'script.js');
  const cp = fork(filePath, args);

  cp.on('close', (code) => {
    console.log(`Child process close all stdio with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
// spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
spawnChildProcess([1, 2, 3]);
