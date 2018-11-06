//
let str = "aaaeeffaa"
let arr = str.split("")
let b = 0
let i = 0
let strip = []

arr.forEach(eVery)

function eVery(value,index,array) {
  let a = str.charAt(index)
  for (i=0; i < str.length; i += 1){
    if ( a === str.charAt(i)){
      b += 1
    }
  }
  strip.push(b+value)
  b = 0
}

console.log(strip)



//function letterCounter(str){


//console.log(letterCounter('aaaeeffaa')) // 5a2e2f
//console.log(letterCounter('abc')) // 1a1b1c
//console.log(letterCounter('zzaappll')) // 2z2a2p2l
//console.log(letterCounter('chris')) // 1c1h1r1i1s
