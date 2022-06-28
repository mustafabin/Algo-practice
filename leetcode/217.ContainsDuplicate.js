/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dupe = false;
  let uniqueNums = {};
  for (let i = 0; i < nums.length; i++) {
    uniqueNums[nums[i]] = uniqueNums[nums[i]] + 1 || 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (1 < uniqueNums[nums[i]]) dupe = true;
  }
  return dupe;
};
