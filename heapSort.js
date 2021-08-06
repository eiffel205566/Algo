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

  for (let c = Math.floor(n / 2) - 1; c > -1; c--) {
    buildHeap(nums, n - 1, c);
  }
  while (n > 0) {
    [nums[0], nums[n - 1]] = [nums[n - 1], nums[0]];
    result.unshift(nums.pop());
    n--;
    buildHeap(nums, n - 1, 0);
  }

  return result;
};
const list2 = [
  -4, 0, 7, 4, 373, 421, 919, 784, 537, 413, 526, 9, -5, -1, 0, -7, -1,
];
const list1 = [543, 78, 31, 18, 31, 178];

const list3 = [
  -1, 537, 784, -4, -5, 421, 0, -7, 919, 526, 9, 7, 4, 0, 413, 373, -1,
];

const list4 = [
  -1, 537, 784, 373, 526, 421, 413, -1, -4, -5, 9, 7, 4, 0, 0, -7, 919,
];

const list5 = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1];

console.log(heapSort(list5));
// console.log(buildHeap(list4, list4.length - 2, 0));
