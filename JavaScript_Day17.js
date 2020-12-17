let str = 'cabca'

function differentSymbolsNaive(str) {
 let splitStr = str.split('')
 return [...new Set(splitStr )].length
}

console.log(differentSymbolsNaive(str))
