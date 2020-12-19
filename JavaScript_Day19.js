// const str = "effg";
// const str = 'cdce';
const str = 'ace';

function alphabetSubsequence(str) {
  let strSplit = str.split("");
  return [...new Set(strSplit)].length === strSplit.length
}

console.log(alphabetSubsequence(str))