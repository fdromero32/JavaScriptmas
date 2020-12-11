function avoidObstacles(nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  let result = 2;

  while (result < sortedNums.length) {
    const isTerminated = sortedNums.every((num) => num % result !== 0);

    if (isTerminated) {
      break;
    }

    result++;
  }

  return result;
}
