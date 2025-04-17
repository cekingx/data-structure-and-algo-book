export function binary_search(nums: number[], target: number): number | Error {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let steps = 0;

  while (startIndex <= endIndex) {
    steps++;
    if (steps > 20) {
      break;
    }

    let midIndex = Math.ceil((endIndex + startIndex) / 2)
    if (target == nums[midIndex]) {
      console.log('total steps', steps)
      return nums[midIndex];
    }

    if(midIndex == endIndex) {
      endIndex = startIndex
      continue;
    }

    if(target >= nums[midIndex]) {
      startIndex = midIndex
      continue;
    }

    if(target <= nums[midIndex]) {
      endIndex = midIndex
      continue;
    }

    if(startIndex == endIndex) {
      break;
    }
  }

  return -1;
}