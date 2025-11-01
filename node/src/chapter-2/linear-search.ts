export function linear_search(nums: number[], target: number): number | Error {
  let steps = 0;
  for (let i = 0; i <= nums.length; i++) {
    steps++
    console.log('steps', steps)
    if (nums[i] == target) {
      console.log('total steps', steps)
      return nums[i];
    }
  }

  console.log('total steps', steps)
  return new Error('Not found')
}