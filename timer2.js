const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const setTimer = (num) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000)
};

const beepOnInput = (input) => {
  if (Number(input)) {
    console.log(`Setting timer for ${input} seconds`);
    setTimer(input);
  }
  if (input === 'b') {
    process.stdout.write('\x07'); // if input = b, beep immediately 

  }
}

var recursiveAsyncReadLine = function () {
  rl.question('Command: ', function (answer) {


    //closing RL and returning from function.
    beepOnInput(answer);
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow


