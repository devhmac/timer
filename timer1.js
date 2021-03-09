let myArgs = process.argv.slice(2);

const setTimer = (num) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000)
};

for (let num of myArgs) {
  let inputNum = Number(num)
  if (inputNum) {
    setTimer(num);
  }
}


