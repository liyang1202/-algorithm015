//二叉树前序遍历
var preorderTraversal = function (root) {
  let res = [],
    stack = [],
    cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
}
