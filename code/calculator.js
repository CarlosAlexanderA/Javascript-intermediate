class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add(number1 = this.num1, number2 = this.num2) {
    return number1 + number2;
  }
  subtract(number1 = this.num1, number2 = this.num2) {
    return number1 - number2;
  }
  multiply(number1 = this.num1, number2 = this.num2) {
    return number1 * number2;
  }
  divide(number1 = this.num1, number2 = this.num2) {
    return number1 / number2;
  }
}
module.exports = { Calculator };
