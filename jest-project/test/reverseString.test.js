const { reverseString } = require('../code/reverseString');

test('Revertir una cadena String', () => {
  expect(reverseString('hola que tal')).toBe('lat euq aloh');
});
