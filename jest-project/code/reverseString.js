function reverseString(string) {
  let myArr = string.split('').reverse();
  return myArr.join('');
}
module.exports = { reverseString };

// console.log(reverseString('hola que tal'));
