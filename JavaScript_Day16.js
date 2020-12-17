function insertDashes(arr) {
  return arr
    .split(" ")
    .map((x) => {
      return x.split("").join("-");
    })
    .join(" ");
}
