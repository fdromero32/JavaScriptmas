// const str = '13:58'
// const str = '25:51'
const str = '02:76';

function validTime(str) {
 let numberArray = str.match(/\d+/g).map(Number)
 console.log(numberArray[1])
 return numberArray[0] <= 23 && numberArray[1] <=59
}

console.log(validTime(str))