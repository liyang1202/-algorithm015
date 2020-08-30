//三数之和===0

var threeSum = function (nums) {
  let len = nums.length

  if (len < 3) return []

  let list = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (nums[i] == nums[i - 1]) continue
    let left = i + 1
    let right = len - 1

    while (left < right) {
      if (right === i) {
        right--
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[left], nums[right], nums[i]])

        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++

        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return list
}
