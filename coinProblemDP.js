const outputMinCoinCombination = (num, coins = [2, 5, 10]) => {
  const map = new Array(num + 1).fill(null);

  map[0] = { 2: 0, 5: 0, 10: 0 };
  map[2] = { 2: 1, 5: 0, 10: 0 };

  //build coin map from $1
  for (let i = 3; i <= num; i++) {
    inner: for (let j = coins.length - 1; j > -1; j--) {
      let coinToTest = coins[j];

      if (i - coinToTest >= 0 && map[i - coinToTest] !== null) {
        let clone = Object.create(
          {},
          Object.getOwnPropertyDescriptors(map[i - coinToTest])
        );
        map[i] = {
          ...clone,
          [coinToTest]: ++clone[coinToTest],
        };
        break inner;
      }
    }
  }

  return map[num];
};

console.log(outputMinCoinCombination(917));
