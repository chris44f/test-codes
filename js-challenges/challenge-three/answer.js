// when give an array it tells me the sum of that array

const arrayToTotal = [1, 5, 10, 100, 250]

function totalArray(a){
  var total = 0
  for (i = 0; i < a.length; i+=1) {
  total += arrayToTotal[i]
  }
  document.write(total)
  }

reverse(arrayToTotal) // outputs 366
