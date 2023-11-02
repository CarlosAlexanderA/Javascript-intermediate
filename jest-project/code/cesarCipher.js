function cesarCipher(text, value = 0) {
  let textSimple = ''.concat(text);
  let myString = '';
  for (let i = 0; i < textSimple.length; i++) {
    let char = textSimple.charCodeAt(i);

    char += char !== 32 ? value : 0;
    if (char > 122) {
      char = 97;
    }
    let convertChar = String.fromCharCode(char);
    myString += convertChar;
  }
  return myString;
}
console.log(cesarCipher('aprendiendo jest por pirmera vez', 2));

module.exports = { cesarCipher };
