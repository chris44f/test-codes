// Part1 (yar coz you understand this is a mega challenge consisting of 5 parts :>)
// write a function that returns the longest word in the input

// Part2 adapt the function so that now if 2 words are longest I want 2 returned
// or if 4 are longest I want all 4 returned etc
// also please see TESTS section below and ensure output looks like that

// Part3 Adapt the current code so that now it passes the tests below

function longestWord(word){
  let a = word.split(/\W/)
  let b = "1"
  let longWords = []
  let description
  a.forEach(function(c){
    switch (true) { // you should probably switch on an actual expression rather than a boolean
      case c.length > b.length:
        b = c // you should do b = c
        longWords.push(c)
        if (c.length > 1){
          description = " is the longest word and is " + c.length + " characters"
        }
        else if (c.length = 1) {
          description = " is the longest word and is 1 character"
        }
        break;
      case c.length === b.length: // you should do c.length === b.length
        b = c
        longWords.push(c)
        if (c.length > 1){
          description = " are the longest words and are " + c.length + " characters"
        }
        else if (c.length = 1) {
          description = " are the longest words and are 1 character"
        }
        break;
    }
  }
  )
    function capFirstLetter(str){
      let capsFirst = str.charAt(0).toUpperCase()
      let largeArray = str.split("")
      largeArray[0] = capsFirst
      return largeArray.join("")
    }
  let stri = longWords.join(", ")
  return capFirstLetter(stri) + description
}

// TESTS
// do not alter the below part
console.log(longestWord('hello!a,yo')) // outputs: Hello is the longest word and is 5 characters
console.log(longestWord('rich-cris,ando')) // outputs: Rich, cris, andy are the longest words and are 4 characters
console.log(longestWord('football!golf,tennis?cricket,polo')) // outputs: Football is the longest word and is 8 characters
console.log(longestWord('a.b,c?d')) // outputs: A, b, c, d are the longest words and are 1 character
