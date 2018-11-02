// Part1 (yar coz you understand this is a mega challenge consisting of 5 parts :>)
// write a function that returns the longest word in the input

function longestWord(word){
  let a = word.split(/\W/) //so I had to look online about this, they suggested RegEx
  //yar cos I have a clue about RegEx :> cos I'm not immediately lost :@ :> but yeh
  //worked out that \W was non-alphanumeric characters
  let b = "1"
  a.forEach(compareLength)
  function compareLength(c){
    if (c.length>b.length){b=c}
  }
  return b
} 

// do not alter the below part
console.log(longestWord('hello!goodybe,yo')) // outputs: goodbye
console.log(longestWord('rich-chris,andy')) // outputs:  chris
console.log(longestWord('football!golf,tennis?cricket,polo')) // outputs: football
console.log(longestWord('a.b,lol')) // outputs: lol

//so how come console.log(console.log(b)) don't work? lol
