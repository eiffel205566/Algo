//build max heap at given node i
// by making sure the largest node is at i

var heapSort = function (nums) {
  const buildHeap = (arr, n, i) => {
    //buildHeap at position i
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left <= n && arr[left] > arr[i]) {
      largest = left;
    }

    if (right <= n && arr[right] > arr[left] && arr[right] > arr[i]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      return buildHeap(arr, arr.length - 1, largest);
    }

    return arr;
  };

  let result = [];
  let n = nums.length;

  //start at Math.floor(n/2) - 1 as that would be the where the first parent node starts at
  for (let c = Math.floor(n / 2) - 1; c > -1; c--) {
    buildHeap(nums, n - 1, c);
  }
  while (n > 0) {
    [nums[0], nums[n - 1]] = [nums[n - 1], nums[0]];
    result.unshift(nums.pop()); //my naive way of keeping the result in a an array by completely sabotaging memory usage :DDDDD
    n--;
    buildHeap(nums, n - 1, 0);
  }

  return result;
};
