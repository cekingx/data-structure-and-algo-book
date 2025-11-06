import gleam/list

pub fn sort(nums: List(Int)) -> List(Int) {
  helper(nums, 0)
}

pub fn helper(nums: List(Int), counter: Int) -> List(Int) {
  let length = list.length(nums)
  case counter {
    value if value < length -> helper(bubble(nums), value + 1)
    _ -> nums
  }
}

pub fn bubble(nums: List(Int)) -> List(Int) {
  case nums {
    [] | [_] -> nums
    [first, second, ..rest] -> {
      case first > second {
        True -> [second, ..bubble([first, ..rest])]
        False -> [first, ..bubble([second, ..rest])]
      }
    }
  }
}
