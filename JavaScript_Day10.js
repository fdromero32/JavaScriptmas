let array = [3, 6, -2, -5, 7, 3];

function adjacentElementsProducts(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let products = [];

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
   products.push(nums[i] * nums[j])
   i++
  }
  console.log(products)
  return Math.max(...products)
}

console.log(adjacentElementsProducts(array))