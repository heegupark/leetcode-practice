var permutations = function (string) {
  const results = [];
  const permutator = (array) => {
    if (array.length === string.length) return results.push(array.join(''))
    for (let i = 0; i < string.length; i++) {
      if(!array.includes(string[i])) {
        permutator([...array, string[i]])
      }
    }
  }
  permutator([])
  return results;
}

console.log(permutations('abcd'))
