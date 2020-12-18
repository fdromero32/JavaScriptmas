function arrayPreviousLess(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      newArr.push(nums[i - 1]);
    } else {
      newArr.push(-1);
    }
  }
  return newArr;
}