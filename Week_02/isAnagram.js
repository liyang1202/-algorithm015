// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
}

var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false

  let hash = Array(26).fill(0),
    codeA = 'a'.charCodeAt()
  let len = s.length
  for (let i = 0; i < len; i++) {
    hash[s.charCodeAt(i) - codeA]++
    hash[t.charCodeAt(i) - codeA]--
  }

  for (let v of hash) {
    if (v !== 0) return false
  }
  return true
}
