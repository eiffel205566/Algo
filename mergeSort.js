const mergeSort = arr => {
  const merge = (left, right) => {
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //initilizaing
    for (let i = 0; ; i++) {
      //specify stop condition
      if (leftIndex === left.length) {
        temp.push(...right.slice(rightIndex));
        return temp;
      }

      if (rightIndex === right.length) {
        temp.push(...left.slice(leftIndex));
        return temp;
      }
      //---

      //push the smaller number to temp and increment corresponding index
      if (left[leftIndex] <= right[rightIndex]) {
        temp.push(left[leftIndex]);
        leftIndex++;
      } else {
        temp.push(right[rightIndex]);
        rightIndex++;
      }
    }
  };

  //recurssively break original array to the point where all elements has only 1 item
  if (arr.length === 1) return arr;
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));

  //merge two arrays back
  return merge(left, right);
};
