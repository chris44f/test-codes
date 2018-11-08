// write a function that when given 2 parameters, returns the highest number in either param

function highestParam(a,b){
  let c=parseInt(a), d=parseInt(b);
  if(c>d){document.write(c)}
  else if(d>c){document.write(d)}
  else if(isNaN(c) && isNaN(d)){document.write("you doof")}
  else if(isNaN(c)){document.write(d)}
  else if(isNaN(d)){document.write(c)}
  else{document.write("Equivalent!")}}
}

highestParam(1, 100) // returns me 100

highestParam(90, 1) // returns me 90

highestParam([1, 89, 76], 5) //returns me 89 - struggling with this one as I
//mentioned earlier in an email. basically I saw online best thing to do is do
//array.sort(a,b){return b-a} and then use array index to get highest value,
//but just dont really get it ??

highestParam('78', 68) // returns me 78

highestParam('hello', 500) // returns me 500
