import gleeunit
import greatest_number

pub fn main() -> Nil {
  gleeunit.main()
}

pub fn greatest_number_test() {
  let result = greatest_number.greatest_number([1,2,3,4])
  assert result == 4
}
