function capitalize(text) {
  let firstLetter = text.slice(0, 1);
  let restText = text.slice(1);
  return firstLetter.toUpperCase() + restText;
}
module.exports = { capitalize };
// console.log(capitalize('hello world'));
