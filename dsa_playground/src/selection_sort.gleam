import gleam/list

pub fn selection_sort(nums: List(Int)) -> List(Int) {
  sort(nums, [])
}

pub fn sort(nums: List(Int), acc: List(Int)) -> List(Int) {
  case nums {
    [] -> list.reverse(acc)
    [item] -> list.reverse([item, ..acc])
    [first, ..rest] -> {
      let smallest = select_smallest([first, ..rest], first)
      let excluded = exclude([first, ..rest], smallest, [])
      sort(excluded, [smallest, ..acc])
    }
  }
}

pub fn exclude(nums: List(Int), target: Int, acc: List(Int)) -> List(Int) {
  case nums {
    [] -> list.reverse(acc)
    [item] -> {
      case item {
        value if value == target -> list.reverse(acc)
        _ -> list.reverse([item, ..acc])
      }
    }
    [first, ..rest] -> {
      case first {
        value if value == target -> exclude(rest, target, acc)
        _ -> exclude(rest, target, [first, ..acc])
      }
    }
  }
}

pub fn select_smallest(nums: List(Int), smallest: Int) -> Int {
  case nums {
    [] -> smallest
    [item] -> {
      case item {
        value if value < smallest -> value
        _ -> smallest
      }
    }
    [first, ..rest] -> {
      case first {
        value if value < smallest -> select_smallest(rest, value)
        _ -> select_smallest(rest, smallest)
      }
    }
  }
}
