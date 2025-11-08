import gleeunit
import selection_sort

pub fn main() {
  gleeunit.main()
}

pub fn select_smallest_test() {
  let result = selection_sort.select_smallest([4,3,2,1], 4)
  assert result == 1
}

pub fn exclude_test() {
  let result = selection_sort.exclude([3,2,1,4], 1, [])
  assert result == [3,2,4]
}

pub fn sort_test() {
  let result = selection_sort.sort([4,3,2,1], [])
  assert result == [1,2,3,4]
}

pub fn selection_sort_test() {
  let result = selection_sort.selection_sort([7,3,6,5,4,2,1])
  assert result == [1,2,3,4,5,6,7]
}
