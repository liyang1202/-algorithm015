// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串

var groupAnagrams = function (strs) {
  let hash = new Map()

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join()
    if (hash.has(str)) {
      let tmp = hash.get(str)
      tmp.push(strs[i])
      hash.set(str, tmp)
    } else {
      hash.set(str, [strs[i]])
    }
  }

  return [...hash.values()]
}
