function extractEachKth(nums, index) {
  return nums.filter((num) => {
    if (num % index != 0) {
      return num;
    }
  });
}
