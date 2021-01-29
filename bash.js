const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const inputs = data.toString().trim();
  const [cmd, file] = inputs.split(' ');

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(file);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
  //
});
