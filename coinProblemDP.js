//num is assuming to be an positive interger
//default coins are either $2, $5, or $10, can be replaced with any positive number combinations
const outputMinCoinCombination = (num, coins = [2, 5, 10]) => {
  //start a "cache" with an Array of length n is num + 1, fill with "null"
  const map = new Array(num + 1).fill(null);

  //transform array of coin to coin map where key is coin value and value is coin count
  // [2,5,10] => { '2': 0, '5': 0, '10': 0 }
  const coinMap = coins.reduce((prev, cur) => {
    return { ...prev, [cur]: 0 };
  }, {});

  map[0] = { ...coinMap }; //initialize cache by with coinMap when total is $0

  //build "cache" from $1
  for (let i = 1; i <= num; i++) {
    inner: for (let j = coins.length - 1; j > -1; j--) {
      let coinToTest = coins[j]; //grab each of the coin in coins from largest to smallest

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

console.log(outputMinCoinCombination(14));
