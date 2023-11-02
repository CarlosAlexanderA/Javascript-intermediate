const suma = require('./suma');

test('dos mas dos son cuatro', () => {
  expect(suma(2, 2)).toBe(4);
});

test('asignación de un objeto', () => {
  const datos = { uno: 1 };
  datos['dos'] = 2;
  expect(datos).toEqual({ uno: 1, dos: 2 });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('cero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('no hay I en Team', () => {
  expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const listaDeCompras = [
  'pañales',
  'pañuelos',
  'bolsas de basura',
  'toallas de papel',
  'leche',
];

test('la leche se encuentra en la lista de compras', () => {
  expect(listaDeCompras).toContain('leche');
  expect(new Set(listaDeCompras)).toContain('leche');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
