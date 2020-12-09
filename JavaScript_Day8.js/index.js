const dice = document.querySelector(".dice");
dice.addEventListener("click", function (e) {
  dice.innerHTML = "";
  const randomNum = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = `${new Array(randomNum)
    .fill('<div class="dot"></div>')
    .join(" ")}`;
});
