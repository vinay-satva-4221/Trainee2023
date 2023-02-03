// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')


const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    const value = e.target.innerText;
    if (value === "C") {
      input.value = "";
      return;
    }
    input.value += value;
  });
});

const equalButton = document.getElementById("equal-button");
equalButton.addEventListener("click", function() {
  const expression = input.value;
  let result = 0;
  try {
    result = evalExpression(expression);
  } catch (error) {
    result = "Error: Invalid expression";
  }
  input.value = result;
});

function evalExpression(expression) {
  const tokens = expression.split(" ");
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (isOperator(token)) {
      let op2 = parseInt(stack.pop());
      let op1 = parseInt(stack.pop());
      let result = evalOperator(token, op1, op2);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }
  if (stack.length !== 1) {
    throw new Error("Invalid expression");
  }
  return stack[0];
}

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function evalOperator(token, op1, op2) {
  switch (token) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
    default:
      throw new Error("Invalid operator");
  }
}