const { Calculator } = require('../code/calculator');

describe('Calculator', () => {
  describe('add', () => {
    it('suma 2 numeros', () => {
      const calculator = new Calculator(5, 3);
      expect(calculator.add()).toBe(8);
    });
  });
  describe('subtract', () => {
    it('resta 2 numeros', () => {
      const calculator = new Calculator(10, 4);
      expect(calculator.subtract()).toBe(6);
    });
  });
  describe('multiply', () => {
    it('multiplica 2 numeros', () => {
      const calculator = new Calculator(7, 2);
      expect(calculator.multiply()).toBe(14);
    });
  });
  describe('divide', () => {
    it('divide 2 numeros', () => {
      const calculator = new Calculator(15, 3);
      expect(calculator.divide()).toBe(5);
    });
  });
});
