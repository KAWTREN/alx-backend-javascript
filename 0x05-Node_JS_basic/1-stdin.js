var readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);

console.log('Welcome to Holberton School, what is your name?');

r1.question('', (name) => {
    if (name !== null) {
        console.log(`Your name is: ${name}`);
    }
   r1.close();
});
r1.on('close', () => {
    console.log('This important software is now closing');
});