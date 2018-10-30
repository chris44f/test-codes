// write a function that when given 2 parameters, returns the highest number in either param

function highestParam(a, b){
  if(a > b){
    return a
  }
  if (b > a){
    return b
  }
  if (a.constructor === Array){
    let highest = 0
    a.forEach((item) => {
      if(item > highest){
        highest = item
      }
    })
    if(highest > b){
      return highest
    } else {
      return b
    }
  }
  if (isNaN(a)){
    if (!isNaN(b)){
      return b
    }
  }
  if (isNaN(b)){
    if (!isNaN(a)){
      return a
    }
  }
}

console.log(highestParam(1, 100)) // returns me 100

console.log(highestParam(90, 1)) // returns me 90

console.log(highestParam([1, 89, 76], 5)) //returns me 89

console.log(highestParam('78', 68)) // returns me 78

console.log(highestParam('hello', 500)) // returns me 500
