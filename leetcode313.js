/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  //essentially the idea is to keep a pointer for each prime number in primes
  //where pointer is pointing to the last index the prime was used as a factor
  //then find out the next smallest number for iterating thru primes
  //and increment its index

  //build dp
  let map = primes.reduce((prev, cur) => {
    prev[cur] = 0;
    return prev;
  }, {});

  let arr = [1]; //the array to keep track the prime numbers where final result is where index === arr.length - 1

  //smallest value for each round
  let smallestValue;
  //a temporary array to keep track of all possible values in a single while loop
  let tempArr = [];

  while (arr.length !== n) {
    smallestValue = null;
    tempArr = [];

    //where j is index in primes and primes[j] is the prime factor
    //map[primes[j]] is the LAST index (in arr) where primes[j] was used as factor
    //arr[map[primes[j]]] is the LAST value where primes[j] was used as factor
    for (let j = 0; j < primes.length; j++) {
      tempArr.push(arr[map[primes[j]]] * primes[j]);
    }
    smallestValue = Math.min(...tempArr);
    for (let j = 0; j < primes.length; j++) {
      if (arr[map[primes[j]]] * primes[j] === smallestValue) {
        map[primes[j]]++;
      }
    }

    arr.push(smallestValue);
  }

  return arr[arr.length - 1];
};
