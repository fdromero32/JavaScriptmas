function centuryFromYear(num) {
  if (num % 100 === 0) {
    return Math.floor(num / 100);
  }
  return Math.floor(num / 100) + 1;
}
