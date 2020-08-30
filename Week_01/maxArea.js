//盛最多的水

var maxArea = function (height) {
  if (!height || height <= 1) {
    return 0
  }
  let left = 0
  let right = height.length - 1
  let maxArea = 0 //存储最大值
  while (left < right) {
    const area = Math.abs(
      (right - left) * Math.min(height[left], height[right])
    )
    if (area > maxArea) {
      maxArea = area
    }
    if (height[left] < height[right]) {
      left++
      console.error('left', left)
    } else {
      right--
    }
  }
  return maxArea
}
