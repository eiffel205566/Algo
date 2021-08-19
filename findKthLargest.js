/* 
leetcode #215
https://leetcode.com/submissions/detail/540730422/
*/

var findKthLargest = function (nums, k) {
  let counter = 1;

  const buildHeap = (arr, n, i) => {
    //build max heap at i
    let largest = i;
    let left = 2 * i + 1; //left child @ index * 2 + 1
    let right = 2 * i + 2; //right child @ index * 2 + 2

    //compare left node to the node @ index i
    if (left <= n && arr[left] > arr[i]) {
      largest = left;
    }

    //compare right node to the node @ index i
    if (right <= n && arr[right] > arr[i]) {
      largest = right;
      if (arr[left] > arr[right]) {
        largest = left;
      }
    }

    //actually swapping when largest is not at index i, meaning either arr[left] or arr[right] is greated
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      return buildHeap(arr, n, largest); //to make sure max heap status is maintain from index @ largest onward
    }
  };

  //build the initial max heap
  for (let index = Math.floor(nums.length / 2); index > -1; index--) {
    buildHeap(nums, nums.length - 1, index);
  }

  while (counter !== k) {
    nums.shift();
    [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];

    for (let index = Math.floor(nums.length / 2); index > -1; index--) {
      buildHeap(nums, nums.length - 1, index);
    }
    counter++;
  }

  return nums[0];
};
