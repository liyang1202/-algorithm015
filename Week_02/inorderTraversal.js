//二叉树中序遍历
var inorderTraversal = function (root) {
  let res = [],
    stack = []
  if (root) {
    root.right && stack.push(root.right)
    stack.push(root)
    stack.push(null)
    root.left && stack.push(root.left)
  } else {
    res.push(stack.pop().val)
  }
  return res
}
