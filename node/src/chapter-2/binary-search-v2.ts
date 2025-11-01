export function binary_search(nums: number[], target: number): number | Error {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    const mid = Math.floor((high + low) / 2)

    if (nums[mid] == target) {
      return nums[mid]
    }

    if (nums[mid] > target) {
      high = mid - 1;
      continue;
    }

    if (nums[mid] < target) {
      low = mid + 1;
      continue;
    }
  }

  return new Error('not found');
}