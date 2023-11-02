const { capitalize } = require('../code/capitalize');

test('Capitalizar una frase', () => {
  expect(capitalize('hola string')).toBe('Hola string');
});
