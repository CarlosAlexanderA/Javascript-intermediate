// funcion recursiva par comparar todos los datos peor una array
const mergeSort = (arr) => {
  // fin de larecursividad
  if (arr.length === 1) return arr;
  const midArr = Math.floor(arr.length / 2);

  //obtenemos la mitad de la derecha e izquierda del array
  const leftArr = arr.slice(0, midArr);
  const rightArr = arr.slice(midArr, arr.length);

  //hacemos recursividad para llamar la misma funcion hasta que llegue al if === 1
  const leftArrSorted = mergeSort(leftArr);
  const rightArrSorted = mergeSort(rightArr);

  //una funcion que ordena el array
  return merge(leftArrSorted, rightArrSorted);
};

// funcion que ordena y compara el los array los dos lados
const merge = (leftArr, rightArr) => {
  const resultArr = [];

  // permite recorrer el array hasta que llegue a tener 0 en uno de los 2 arrays
  while (leftArr.length > 0 && rightArr.length > 0) {
    // compara si ya uno es mayor que el otro
    if (leftArr[0] > rightArr[0]) {
      // se guarda en el resultado
      resultArr.push(rightArr[0]);
      // y se elimna del el que ya fue añadido para que tambien acabe el bucle
      rightArr.shift();
    } else {
      resultArr.push(leftArr[0]);
      leftArr.shift();
    }
  }

  // el array restante que añadir los numeros, asi si hay mas se usa un bucle
  // nota : todos los datos ya estan ordenados y por ello no es necesario ordenarlos a partir de aqui
  while (leftArr.length > 0) {
    resultArr.push(leftArr[0]);
    leftArr.shift();
  }
  while (rightArr.length > 0) {
    resultArr.push(rightArr[0]);
    rightArr.shift();
  }

  // se devuelve el array resultante, y ya ordenado
  return resultArr;
};
// array a ordenar
const order = [64, 616, 352, 146, 996, 386, 328, 763];

console.log(mergeSort(order)); // [64, 146, 328, 352, 386, 616, 763, 996]
