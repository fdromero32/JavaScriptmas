function arrayMaximalAdjacentDifference(nums) {
  let differences = [];
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    differences.push(Math.abs(nums[i] - nums[j]));
    i++;
  }
  return Math.max(...differences);
}