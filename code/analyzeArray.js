function analyzeArray(array) {
  const sortArray = [].concat(array).sort((a, b) => (a > b ? 1 : -1));
  const leghtArr = sortArray.length;
  const totalArray = sortArray.reduce(
    (acumulator, current) => acumulator + current
  );
  return {
    average: totalArray / leghtArr,
    min: sortArray.shift(),
    max: sortArray.pop(),
    length: leghtArr,
  };
}
// console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = { analyzeArray };
