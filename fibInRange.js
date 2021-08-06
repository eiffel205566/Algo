//typical basic fib algo except asking you to return all fib numbers within a range
let fibInRange = (a, b) => {
  //where a <=b and assuming both are positive integers;
  let c = 0;
  let d = 1;
  let cache = [];
  theLoop: for (let counter = 0; ; counter++) {
    //check for stopping condition
    if (c >= b) {
      if (c === b) cache.push(c);
      break theLoop;
    }

    if (d >= b) {
      if (d === b) cache.push(d);
      break theLoop;
    }

    //check if greater than lower bound, if so, check if cache already has it, if not add it to cache
    if (c >= a && !cache.includes(c)) cache.push(c);
    if (d >= a && !cache.includes(d)) cache.push(d);

    [c, d] = [d, c + d];
  }
  return cache;
};

console.log(fibInRange(20, 40)); //return fib numbers in an array where all members within a, b range;
