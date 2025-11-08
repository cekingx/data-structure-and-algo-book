export function selectionSort(nums: number[]): number[] {
  let step = 0;
  for (let j = 0; j < nums.length - 1; j++) {
    let smallestIndex = j;
    for (let i = smallestIndex + 1; i < nums.length; i++) {
      if (nums[smallestIndex] > nums[i]) {
        smallestIndex = i
      }
      step++
    }

    const temp = nums[j]
    nums[j] = nums[smallestIndex]
    nums[smallestIndex] = temp
  }
  console.log(`step: ${step}`)
  return nums
}
