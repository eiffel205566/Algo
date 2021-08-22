var kSmallestPairs2 = function (nums1, nums2, k) {
  let result = [];

  for (let i = 0; i < (nums1.length > k ? k : nums1.length); i++) {
    for (let j = 0; j < (nums2.length > k ? k : nums2.length); j++) {
      result.push([nums1[i], nums2[j]]);
    }
  }

  result.sort((a, b) => {
    return a[0] + a[1] - b[0] - b[1];
  });

  return k > result.length ? result : result.slice(0, k);
};
