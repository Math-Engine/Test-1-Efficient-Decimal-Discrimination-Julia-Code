const { spawn, execSync } = require('child_process');

const startTime = process.hrtime();

const juliaProcess = spawn('julia', [process.argv[2], process.argv[3]]);

juliaProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

juliaProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

juliaProcess.on('close', (code) => {
  const diff = process.hrtime(startTime);
  const timeInSeconds = diff[0] + diff[1] / 1e9;
  console.log(`${process.argv[2]} : ${timeInSeconds.toFixed(3)} seconds`);
  execSync(`echo "${process.argv[2]} : ${timeInSeconds.toFixed(3)} seconds <br>" >> $GITHUB_STEP_SUMMARY`);
});
