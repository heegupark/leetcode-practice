var rockPaperScissors = function (num) {
  const results = [];
  const string = 'RPS'
  const permutator = (array) => {
    if (array.length === string.length) return results.push(array.join(''))
    for (let i = 0; i < num; i++) {
      permutator([...array, string[i]])
    }
  }
  permutator([])
  return results;
}


console.log(rockPaperScissors(3))
