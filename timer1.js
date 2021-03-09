let myArgs = process.argv.slice(2);

const setTimer = (num) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000)

};


