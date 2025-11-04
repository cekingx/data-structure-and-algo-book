export function bubble_sort(nums: number[]): number[] {
  let step = 0;
  for (let start = 0; start < nums.length; start++) {
    let pointer = 0;
    for (let compare = 1; compare < nums.length - start; compare++) {
      if (nums[pointer] > nums[compare]) {
        const temp = nums[pointer];
        nums[pointer] = nums[compare];
        nums[compare] = temp;
      }
      pointer++
      step++
    }
  }
  console.log(`total step: ${step}`)
  return nums
}
