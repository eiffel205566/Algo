/* 
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/
https://leetcode.com/submissions/detail/542590144/
*/

var findMedianSortedArrays = function (nums1, nums2) {
  //tackle the edge case where there is only 1 element in total for the 2 arrays
  if (nums1.length + nums2.length === 1) {
    return (nums1[0] ? nums1[0] : 0) + (nums2[0] ? nums2[0] : 0);
  }

  let mid = Math.floor((nums1.length + nums2.length) / 2); //calculate the mid point
  let counter1 = 0; //pointer for array 1
  let counter2 = 0; //pointer for array 2
  let current = null; //the current value
  let last = null; //last value

  for (let i = 0; ; i++) {
    if (counter1 + counter2 === mid + 1) break; //when sum of pointers reach mid point, exit loop
    last = current;

    if (counter1 === nums1.length) {
      //array 1 is exhausted
      current = nums2[counter2];
      counter2++;
      continue;
    }

    if (counter2 === nums2.length) {
      //array 2 is exhausted
      current = nums1[counter1];
      counter1++;
      continue;
    }

    if (nums1[counter1] <= nums2[counter2]) {
      //take the lesser of the 2 number: nums1[counter1] and nums2[counter2]
      current = nums1[counter1];
      counter1++;
    } else {
      current = nums2[counter2];
      counter2++;
    }
  }

  return (nums1.length + nums2.length) % 2 === 0 //different returned value dependent on whether sum of length of 2 arrays being even or odd
    ? (current + last) / 2
    : current;
};
