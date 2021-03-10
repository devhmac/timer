
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

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

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  //process.stdout.write('.');
  beepOnInput(key)
});


// Trying to do this problem with readline, got everything working except the exit message on ctrl+c
//let recursiveAsyncReadLine = function () {
//   rl.question('Command: ', function (answer) {
//     if (answer == '\u0003') {
//       console.log('goodbye')
//       return rl.close()
//     }
//     //closing RL and returning from function.
//     beepOnInput(answer);
//     recursiveAsyncReadLine(); //Calling this function again to ask new question
//   });
// };

// recursiveAsyncReadLine(); //we have to actually start our recursion somehow


