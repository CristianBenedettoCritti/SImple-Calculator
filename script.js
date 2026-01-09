const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = false));
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => (btn.disabled = true));
    const resetButton = document.getElementById("reset");
    if (resetButton) resetButton.disabled = false;
  }
}

function removeNumber() {
  display.value = display.value.slice(0, -1);
}

function minusNumber() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
