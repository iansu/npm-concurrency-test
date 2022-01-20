const { spawn } = require('child_process');

for (let i = 1; i <= 10; i++) {
  const child = spawn('npm', ['install'], {
    stdio: 'inherit',
    cwd: `./packages/package-${i}`,
  });

  child.on('error', (error) => {
    console.error(`package-${i} ${error}`);
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
