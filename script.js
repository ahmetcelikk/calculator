var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector("#screen");
var btnOperator = document.querySelectorAll("#btnOperator");
var optState = false;
var opt = "";
var final = 0;

btnNumber.forEach((number) => {
  number.addEventListener("click", showNumber);
  function showNumber() {
    this.style.fontSize = "25px";
    if (screen.textContent == "0" || optState) {
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;
    setTimeout(() => {
      this.style.fontSize = "15px";
    }, 500);
  }
});

btnOperator.forEach((operator) => {
  operator.addEventListener("click", calculator);
  function calculator() {
    optState = true;
    var newOperator = this.textContent;

    switch (opt) {
      case "+":
        screen.textContent = final + Number(screen.textContent);

        break;
      case "-":
        screen.textContent = final - Number(screen.textContent);

        break;
      case "*":
        screen.textContent = final * Number(screen.textContent);

        break;
      case "/":
        screen.textContent = final / Number(screen.textContent);

        break;
      case "=":
        final = Number(screen.textContent);

        break;
    }
    final = Number(screen.textContent);
    opt = newOperator;
  }
});
