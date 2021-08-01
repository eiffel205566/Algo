//num is assuming to be an positive interger
//default coins are either $2, $5, or $10, can be replaced with any positive number combinations
const outputMinCoinCombination = (num, coins = [2, 5, 10]) => {
  //start a "cache" with an Array of length n is num + 1, fill with "null"
  const map = num < 3 ? new Array(3).fill(null) : new Array(num + 1).fill(null);

  map[0] = { 2: 0, 5: 0, 10: 0 }; //coin combination when total is $0
  map[2] = { 2: 1, 5: 0, 10: 0 }; //coin combination when total is $2

  //build "cache" from $3
  for (let i = 3; i <= num; i++) {
    inner: for (let j = coins.length - 1; j > -1; j--) {
      let coinToTest = coins[j]; //grab each of the coin in coins

      if (i - coinToTest >= 0 && map[i - coinToTest] !== null) {
        //if cache value does exist and it is not null
        //create a true clone to the cached value, note: cached value is at map[i - coinToTest]
        let clone = Object.create(
          {},
          Object.getOwnPropertyDescriptors(map[i - coinToTest])
        );
        map[i] = {
          ...clone,
          [coinToTest]: ++clone[coinToTest], //increment value by 1
        };
        break inner;
      }
    }
  }

  return map[num];
};

console.log(outputMinCoinCombination(4727));
