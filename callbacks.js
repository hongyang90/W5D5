// CLOCK CLASS
// class Clock {
//     constructor() {
//         this.date = Math.floor(Date.now() / 1000);
//         this.seconds = this.date % 60;
//         this.date = Math.floor(this.date / 60);
//         this.minutes = this.date % 60;
//         this.date = Math.floor(this.date / 60);
//         this.hours = this.date % 24;
//         this.printTime();
        
//         window.setInterval(() => this._tick(), 1000);
//     }
    

//     printTime() {
//         let hr = this.hours;
//         if (this.hours < 10) {
//             hr = `0${this.hours}`;
//         }
//         let min = this.minutes;
//         if (this.minutes < 10) {
//             min = `0${this.minutes}`;
//         }
//         let sec = this.seconds;
//         if (this.seconds < 10) {
//             sec = `0${this.seconds}`;
//         }
//         console.log(`${hr}:${min}:${sec}`);
//     }

//     _tick() {
//         this.seconds++;
//         if (this.seconds === 60) {
//             this.seconds = 0;
//             if (this.minutes === 60) {
//                 this.minutes = 0;
//                 if (this.hours === 24) {
//                     this.hours = 0;
//                 } else {
//                     this.hours++;
//                 }
//             } else {
//                 this.minutes++;
//             }
//         }
//         return this.printTime();
//     }
// }

// const nowish = new Clock();


// ADD NUMBERS
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});


// const addNumbers = (sum, numsLeft, completionCallback) => {
//     let total = sum;
//     if (numsLeft === 0) {
//         return completionCallback(total);
//     }

//     reader.question("Pick a number", function (answer) {
//         const ans = parseInt(answer);
//         console.log(total);
//         total += ans;
        
//         console.log(`number: ${ans}`);
//         console.log(`partial sum: ${total}`);
//         addNumbers(total, numsLeft - 1 , completionCallback);
//       });  
// }

// addNumbers(0, 3, sum => {console.log(`Total Sum: ${sum}`);
// reader.close();
// });

// CRAZY BUBBLESORT

const askIfGreaterThan = (el1, el2, callback) => {
    reader.question(`Is ${el1} greater than ${el2}? ('yes' or 'no') `, 
            (answer) => {
                if (answer === 'yes') {callback(true);}
                else {
                callback(false);
                }
            });
};

// askIfGreaterThan(1, 4, (arg) => console.log(`${arg}`));

function innerBubbleSortLoop(arr, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    arr.forEach((el, i) => {
        if (i === arr.length - 1) {
            return outerBubbleSortLoop(madeAnySwaps);
        }
        askIfGreaterThan(el, arr[i + 1], (bool) => {
            if (bool) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        });
        
    }
  }

  
  // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
  // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
  
  function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
    }
  
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
  }
  
  absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });

// const absurdBubbleSort = (arr, sortCompletionCallback) => {
//     const newArr = [];
//     let sorted = false;

//     while (!sorted) {
//         sorted = true;
//         arr.forEach((el, idx) => {
//             if (idx < arr.length - 1) {
//                 if (askIfGreaterThan(el, arr[idx + 1]))
//             }
            
//         })
//     }
// }