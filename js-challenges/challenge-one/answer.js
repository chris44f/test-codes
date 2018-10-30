// edit below function, when given a string. returns the reverse

const stringToReverse = 'featley'

function reverse(str){
  return Array.from(str).reverse().join('')
}

const answer = reverse(stringToReverse) // outputs yeltaef

console.log(answer)
