// fibonacci con recurson, no es la mas optima
const fibsRec = (num) => {
  if (num < 2) return num;
  return fibsRec(num - 2) + fibsRec(num - 1);
};
const fibs = (n) => {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(fibsRec(i));
  }
  return arr;
};
//podemos ver el tiempo de demora de dicha consulta con console time
console.time('fibo');
console.log('con recursion');

console.log(fibsRec(40)); // 102334155
// tiempo de demora con recrsion para (40) => fibo: 1.015s
console.log(fibs(8)); // => fibo: 1.015s
console.timeEnd('fibo');

const fiboFor = (num) => {
  const arr = [0, 1];
  if (num < 2) return arr[num];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[num];
};

console.time('fiboFor');
// con el bucle for es mas rapido y optimizado
console.log('con el bucle for ');
console.log(fiboFor(40)); // 102334155
// tiempo de espera => fiboFor: 0.105ms

console.log(fiboFor(100)); // 354224848179262000000
// tiempo de espera => fiboFor: 0.115ms

console.timeEnd('fiboFor');
