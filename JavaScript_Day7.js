// Input
let str = "abcde";

function countVowelConsonant(str) {

  let addSplit = str.split("").map((x) => {
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      return 1;
    } else {
      return 2;
    }
  });

  let addCount = addSplit.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(addCount);
}

countVowelConsonant(str);
// Output = 8
