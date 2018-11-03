
function letterCounter(str){
  let completedArray = []
  let letterToFind
  let stringArray = Array.from(str)
  for (var i = 0; i < stringArray.length; i++) {
    letterToFind = stringArray[i]
    const len = stringArray.filter(w => w === letterToFind)
    completedArray.push(`${len.length}${letterToFind}`)
  }
  const set = new Set(completedArray)
  return Array.from(set).join('')
}

console.log(letterCounter('aaaeeffaa'))
// letterCounter('abbcc')
// letterCounter('klqqqq')
