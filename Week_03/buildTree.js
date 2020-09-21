var buildTree = function (preorder, inorder) {
  pre = i = 0
  build = function (stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[pre++])
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }
  return build()
}
