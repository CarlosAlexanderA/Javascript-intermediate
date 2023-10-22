// nuestro nodo, solo 'value' es oblogatorio
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// nuestro arbol binario, con metodos para sus nodos
class Tree {
  constructor(arr) {
    this.root = this.build(arr);
  }
  // ordenar y eliminar duplicados
  #sortAndRemoveDupli(array) {
    // 'new Set' => solo almacena valores unicos, no repetidos
    const sorted = [...new Set(array)];
    sorted.sort((a, b) => a - b);
    // devolvemos sin duplicados y ordendenados
    return sorted;
  }
  // extraer los valores del arbol como un array
  #extratValues(obj) {
    const values = [];
    function traverse(currenNode) {
      if (currenNode === null) return;
      values.push(currenNode.value);
      // recursividad, para recorrer todos los left and right
      traverse(currenNode.left);
      traverse(currenNode.right);
    }
    traverse(obj);
    values.shift(); // eliminamos el primer elemento
    return values;
  }
  // convertir el array en un arbol binario equilibrado
  build(array) {
    const sorterArr = this.#sortAndRemoveDupli(array);
    // cuando llegamos a las hojas(numero final), se devuelve nulo
    // cuando se ingrese un array vacio '[]' => devolvemos nulo
    if (sorterArr.length === 0) return null;
    // obtemos los datos del array,
    const numMid = Math.floor(sorterArr.length / 2);
    const midArr = sorterArr[numMid];
    const leftArr = sorterArr.filter((num) => num < midArr);
    const rightArr = sorterArr.filter((num) => num > midArr);
    // usamos recursividad, para crear nuevos nodos hasta que llegue al if
    return new Node(midArr, this.build(leftArr), this.build(rightArr)); // nodo(valor, left, right)
    // tal como una lista enlazada
  }
  // insertamos el valor y lo pondra en el lugar correspondiente
  insert(value) {
    // referencia a nuestro constructor
    let myTree = this.root;
    while (myTree !== null) {
      // devolvemos un error si ya existe el valor
      if (value === myTree.value) {
        console.error('you cannot overwrite an existing node ');
        return null;
      }
      // recorremos nuestros Nodos
      if (value > myTree.value) {
        // si es mayor que vaya a la derecha
        if (myTree.right === null) {
          // si esta vacio agregamos el nuevo nodo
          const newNode = new Node(value);
          myTree.right = newNode;
          console.warn('correctly added to the tree');
          return myTree;
        }
        // vamos al siguiente nodo
        myTree = myTree.right;
      } else {
        // si es menor que vaya a la izquierda
        if (myTree.left === null) {
          // si esta vacio agregamos el nuevo nodo
          const newNode = new Node(value);
          myTree.left = newNode;
          console.warn('correctly added to the tree');
          return myTree;
        }
        // vamos al siguiente nodo
        myTree = myTree.left;
      }
    }
  }
  delete(value) {
    let myTree = this.root;
    while (myTree !== null) {
      if (value > myTree.value) {
        if (myTree.right.value === value) {
          let prevNode = myTree;
          let current = myTree.right;
          console.log(prevNode);
          if (current.left === null && current.right === null) {
            prevNode.right = null;
            break;
          }
          const newTree = this.build(this.#extratValues(current));
          console.log(this.#extratValues(current));

          // console.log(prevNode);
          prevNode.right = newTree;
          break;
        }

        myTree = myTree.right;
      } else {
        if (myTree.left.value === value) {
          //#region comentt
          // let prevNode = myTree;
          // let current = myTree.left;
          // // console.log(prevNode);
          // // prevNode.right = current.right;
          // prevNode.left = current.left;

          // break;
          //#endregion
          let prevNode = myTree;
          let current = myTree.left;
          console.log(prevNode);
          console.log(current);

          if (current.left === null && current.right === null) {
            prevNode.left = null;
            break;
          }
          const newTree = this.build(this.#extratValues(current));
          console.log(this.#extratValues(current));

          // console.log(prevNode);
          prevNode.left = newTree;
          break;
        }

        myTree = myTree.left;
      }
    }
  }
}

// const numberDesorder = [1, 4, 2, 45, 8, 21, 89, 9, 3, 5, 7, 4];
// const mid = Math.floor(numberDesorder.length / 2);
// console.log(numberDesorder.slice(0, mid));
// console.log(numberDesorder.slice(mid, numberDesorder.length));

// console.log(numberDesorder.sort((a, b) => a - b));

const myTree = new Tree([1, 4, 2, 45, 8, 21, 89, 9, 3, 5, 7, 4, 99, 80]);
// const myTree = new Tree([1, 4, 2, 45, 8]);

// const myTree = new Tree([
//   1, 4, 2, 45, 8, 21, 89, 9, 3, 5, 7, 4, 10, 12, 20, 24, 12, 13,
// ]);

// imprime en formato estrucutrado nuestro arbol, en la consola
// usamos recursvidad
const prettyPrint = (node, prefix = '', isLeft = true) => {
  // se recorre hasta que llegue al nulo
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
// console.log(myTree.build([1, 4, 2, 45, 8, 21, 89, 9, 3, 5, 7, 4]));
prettyPrint(myTree.root);
// console.log(myTree.root);
// myTree.insert(6);

// prettyPrint(myTree.insert(6));
myTree.delete(45);
console.log('-------------------');

prettyPrint(myTree.root);
