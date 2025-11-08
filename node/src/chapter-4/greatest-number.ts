export function greatestNumber(nums: Number[]): Number {
  if (nums.length < 1) {
    return 0
  }

  let greatest = nums[0];
  let step = 0;
  for (const num of nums) {
    if (num > greatest) {
      greatest = num
    }
    step++
  }
  console.log(`use ${step} steps`)
  return greatest;
}
