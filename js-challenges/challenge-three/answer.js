// when give an array it tells me the sum of that array

const arrayToTotal = [1, 5, 10, 100, 250]

function totalArray(arr){
  return arr.reduce((a, b) => {
    return a+b
  })
}

const answer = totalArray(arrayToTotal) // outputs 366

console.log(answer)
