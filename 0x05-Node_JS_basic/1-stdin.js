console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
