export function insertionSort(nums: number[]): number[] {
  for (let j = 1; j < nums.length; j++) {
    const key = nums[j]
    let i = j-1

    // console.log(`key is index ${j}`)
    while (i >= 0 && nums[i] > key) {
      nums[i+1] = nums[i]
      // console.log(`shifting index ${i} to index ${i+1}`)
      // console.log('nums', nums)
      i--
    }

    nums[i+1] = key
    // console.log(`assigning index ${i+1} with index ${j}`)
    // console.log('nums', nums)
    // console.log('\n')
  }
  return nums
}
