const display = document.getElementById("display");
const subdisplay = document.getElementById("subdisplay");
const mark = document.getElementById("mark");

mark.value = 0;
var calcDone = false;
var sol = 0;
var equation = 0;
const sum = 0;
var thefirst = true;
function appendToDisplay(input) {
  if (calcDone == true) {
    display.value = "";
    display.value += input;
    calcDone = false;
  } else {
    display.value += input;
  }
  subdisplay.value += input;
}

function clearDisplay() {
  display.value = "";
  subdisplay.value = "";
  mark.value = "0";
}

function calculate() {
  var equation = display.value;
  try {
    var sol = eval(equation);
  } catch (error) {
    display.value = "Error";
  }

  display.value = sol;
  subdisplay.value += "=";
  subdisplay.value += eval(display.value);
  subdisplay.value += " ";
  calcDone = true;
}

function markMin() {
  mark.value = parseInt(mark.value, 10) - parseFloat(display.value, 10);
}

function markPlus() {
  mark.value = parseInt(mark.value, 10) + parseFloat(display.value, 10);
}
function markClear() {
  mark.value = "0";
}
function writeNegative() {
  display.value = -display.value;
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
  subdisplay.value = display.value;
  subdisplay.value += input;
}
