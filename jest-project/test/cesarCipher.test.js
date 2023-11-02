const { cesarCipher } = require('../code/cesarCipher');

test('cesar cipher algoritmo', () => {
  expect(cesarCipher('aprendiendo jest por pirmera vez', 2)).toBe(
    'crtgpfkgpfq lguv rqt rktogtc xga'
  );
});
