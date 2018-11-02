// Part1 (yar coz you understand this is a mega challenge consisting of 5 parts :>)
// write a function that returns the longest word in the input

// Part2 adapt the function so that now if 2 words are longest I want 2 returned
// or if 4 are longest I want all 4 returned etc
// also please see TESTS section below and ensure output looks like that

function longestWord(word){
  let a = word.split(/\W/)
  let b = "1"
  a.forEach(compareLength)
  function compareLength(c){
    if (c.length>b.length){b=c}
  }
  return b
}

// TESTS
// do not alter the below part
console.log(longestWord('hello!a,yo')) // outputs: The longest string is hello
console.log(longestWord('rich-cris,ando')) // outputs: The longest string is rich, cris, ando
console.log(longestWord('football!golf,tennis?cricket,polo')) // outputs: The longest string is football
console.log(longestWord('a.b,c?d')) // outputs: The longest string is a, b, c, d
