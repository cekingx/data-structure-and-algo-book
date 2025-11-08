pub fn greatest_number(nums: List(Int)) -> Int {
  get_greatest(nums, 0, 1)
}

pub fn get_greatest(nums: List(Int), greatest: Int, step: Int) -> Int {
  case nums {
    [] -> greatest
    [value, ..rest] -> {
      case value {
        inner if inner > greatest -> get_greatest(rest, inner, step + 1)
        _ -> get_greatest(rest, greatest, step + 1)
      }
    }
  }
}
