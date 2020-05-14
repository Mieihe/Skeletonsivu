// Basic functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, numA, numB) {
  if (operator == "+") return parseFloat(add(numA, numB).toFixed(4));
  if (operator == "-") return parseFloat(subtract(numA, numB).toFixed(4));
  if (operator == "*") return parseFloat(multiply(numA, numB).toFixed(4));
  if (operator == "/") return parseFloat(divide(numA, numB).toFixed(4));
}


// Calculator functionality
const btns = document.querySelectorAll('.btn');
let screenText = document.querySelector(".screen");
let textToAdd, opera, afterSolve, previousText;
let num1 = "";
let num2 = "";
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    afterSolve = textToAdd;
    if (textToAdd == "") {
      screenText.textContent = "";
    }
    textToAdd = e.target.innerText;
    if (textToAdd == "<") {
      screenText.textContent = screenText.textContent.slice(0, -1);
    } else if (textToAdd == "C") {
      screenText.textContent = "";
      num1 = "";
      num2 = "";
      opera = "";
      afterSolve = "";
      previousText = "";
    } else if ((textToAdd == "+") || (textToAdd == "-") || (textToAdd == "*") || (textToAdd == "/")) {
        if (num1 !== "") {
          num2 = Number(screenText.textContent);
          screenText.textContent = operate(opera, num1, num2);
        }
        num1 = Number(screenText.textContent);
        opera = textToAdd;
        textToAdd = "";
    } else if (textToAdd == "=") {
      if ((previousText == "+") || (previousText == "-") || (previousText == "*") || (previousText == "/")) {
        return;
      } else {
        num2 = Number(screenText.textContent);
        screenText.textContent = operate(opera, num1, num2);
        num1 = "";
        num2 = "";
      }
    } else if (textToAdd == ".") {
      if (screenText.textContent.indexOf(".") > -1) return;
      if (afterSolve == "=") {
        screenText.textContent = "";
      }
      screenText.textContent += textToAdd.toString();
    } else {
      if (afterSolve == "=") {
        screenText.textContent = "";
      }
      screenText.textContent += textToAdd.toString();
    }
    if (textToAdd !== "=") {
      previousText = e.target.innerText;
    }
  })
});


// Keyboard support
const potentialKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '.', '=', '<', '*', '/', 'c', ',', 'Enter', 'Backspace', 'Delete'];
document.addEventListener('keydown', function(e) {
  if (potentialKeys.includes(e.key)) {
    afterSolve = textToAdd;
    if (textToAdd == "") {
      screenText.textContent = "";
    }
    if (e.key == ",") {
      textToAdd = ".";
    } else if (e.key == "Enter") {
      textToAdd = "="
    } else if (e.key == "Backspace") {
      textToAdd = "<"
    } else if (e.key == "Delete") {
      textToAdd = "C"
    } else {
      textToAdd = e.key;
    }
    if (textToAdd == "<") {
      screenText.textContent = screenText.textContent.slice(0, -1);
    } else if (textToAdd == "C") {
      screenText.textContent = "";
      num1 = "";
      num2 = "";
    } else if ((textToAdd == "+") || (textToAdd == "-") || (textToAdd == "*") || (textToAdd == "/")) {
        if (num1 !== "") {
          num2 = Number(screenText.textContent);
          screenText.textContent = operate(opera, num1, num2);
        }
        num1 = Number(screenText.textContent);
        opera = textToAdd;
        textToAdd = "";
    } else if (textToAdd == "=") {
      if ((previousText == "+") || (previousText == "-") || (previousText == "*") || (previousText == "/")) {
        return;
      } else {
        num2 = Number(screenText.textContent);
        screenText.textContent = operate(opera, num1, num2);
        num1 = "";
        num2 = "";
        opera = "";
        afterSolve = "";
        previousText = "";
      }
    } else if (textToAdd == ".") {
      if (screenText.textContent.indexOf(".") > -1) return;
      if (afterSolve == "=") {
        screenText.textContent = "";
      }
      screenText.textContent += textToAdd.toString();
    } else {
      if (afterSolve == "=") {
        screenText.textContent = "";
      }
      screenText.textContent += textToAdd.toString();
    }
    if (textToAdd !== "=") {
      if (e.key == ",") {
        previousText = ".";
      } else if (e.key == "Enter") {
        previousText = "="
      } else if (e.key == "Backspace") {
        previousText = "<"
      } else if (e.key == "Delete") {
        previousText = "C"
      } else {
        previousText = e.key;
      }
    }

  }
});








