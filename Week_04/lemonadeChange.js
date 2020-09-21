var lemonadeChange = function (bills) {
  var a = 0
  b = 0
  for (var i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      a++
    } else if (bills[i] == 10) {
      b++
      a--
    } else {
      if (b == 0) {
        a -= 3
      } else {
        a--
        b--
      }
    }
    if (a < 0 || b < 0) return false
  }
  return true
}
