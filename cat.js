const fs = require('fs');
//const path = require('path');

module.exports = function (file) {
  //const fileName = path.join(__dirname, `./${file}`);

  fs.readFile(file, (err, file) => {
    if (err) throw err;
    process.stdout.write(file);
    process.stdout.write('\nprompt > ');
  });
};
