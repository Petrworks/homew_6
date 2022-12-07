const a = +prompt("Введіть перше число");
const b = +prompt("Введіть друге число");
let result;

const operation = prompt("Введіть операцію");
switch (operation) {
  case "+": {
    result = a + b;
    break;
  }
  case "-": {
    result = a - b;
    break;
  }
  case "*": {
    result = a * b;
    break;
  }
  case "/": {
    result = a / b;
    break;
  }

  default: {
    alert("unknown operation");
  }
}
alert(`${a} ${operation} ${b} = ${result}`);
