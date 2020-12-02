function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let money = deposit;

  while (money < threshold) {
    money = money * (rate / 100) + money;
    years += 1;
  }
  return years;
}
