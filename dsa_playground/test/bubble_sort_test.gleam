import gleeunit
import bubble_sort

pub fn main() -> Nil {
  gleeunit.main()
}

pub fn hello_world_test() {
  let result = bubble_sort.sort([3,2,1])
  assert result == [1,2,3]
}

pub fn bubble_test() {
  let result = bubble_sort.bubble([4,3,2,1])
  assert result == [3,2,1,4]
}

pub fn helper_test() {
  let result = bubble_sort.helper([4,3,2,1], 0)
  assert result == [1,2,3,4]
}
