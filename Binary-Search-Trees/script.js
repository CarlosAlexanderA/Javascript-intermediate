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
    console.log(values);
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
  // Eliminar un nodo segun su valor del arbol
  delete(value) {
    let myTree = this.root;
    // recorrer el arbol hasta que no haya ninguno
    while (myTree !== null) {
      if (value > myTree.value) {
        // cuando el valor de un hijo de un nodo sea igual a value
        if (myTree.right.value === value) {
          let prevNode = myTree; // nodo previo al del valor
          let current = myTree.right; // nodo con el valor(value)
          // cuando el nodo no tenga descendencia
          if (current.left === null && current.right === null) {
            prevNode.right = null;
            break;
          }
          // cuando el nodo tenga descendenciạ̣̣
          // '#extratValues' => obtiene un array con los valores del nodo actual
          // tenemos que obtener un nuevo nodo central
          const newTree = this.build(this.#extratValues(current)); // creamos un nuevo nodo con los valores el array de datos

          // devolvemos el nuevo nodo , con un nuevo root
          prevNode.right = newTree; // se crea una nueva raiz
          break;
        }
        // pasamos al siguiente nodo
        myTree = myTree.right;
      } else {
        // lo mismo que nuestro if de arriba, solo cambiamos el 'right' por el 'left'
        // ya que queremos agregarlo en la izquierda
        if (myTree.left.value === value) {
          let prevNode = myTree;
          let current = myTree.left;
          if (current.left === null && current.right === null) {
            prevNode.left = null;
            break;
          }
          const newTree = this.build(this.#extratValues(current));
          prevNode.left = newTree;
          break;
        }
        // pasamos al siguiente nodo
        myTree = myTree.left;
      }
    }
  }
  // encuentra el nodo por el valor y lo devuelve
  find(value) {
    let myTree = this.root;
    while (myTree !== null) {
      if (value === myTree.value) {
        return myTree;
      }
      // segun el valor del nodo va a la izquierda o derecha
      if (value > myTree.value) {
        myTree = myTree.right;
      } else {
        myTree = myTree.left;
      }
    }
    // en caso de no encontrarlo
    console.log('node not found');
    return null;
  }
  // devolver el arbol en niveles como un array
  levelOrder(callback) {
    if (!this.root) return [];
    const queue = [this.root]; // almacena los nodos y los guarda dentro del mismo
    const results = []; // el array que se agregaran los niveles
    while (queue.length !== 0) {
      let size = queue.length; // cuenta los elementos de nuestro array
      let level = []; // se muestra en un array nuestros niveles
      for (let i = 0; i < size; i++) {
        // segun el size se ejecutaran n vecces
        const node = queue.shift(); // el primer dato de 'queue'
        level.push(node.value); // ingresamos los datos a la matriz del nivel
        if (node.left !== null) queue.push(node.left); // agrega un nuevo elemento al array de 'queue'
        if (node.right !== null) queue.push(node.right); // agrega un nuevo elemento al array de 'queue'
        if (callback) callback(node); // en caso de tener una funcion
      }

      results.push(level); // agrega en nivel nuestro datos
      // ejem => [ [ 8 ], [ 4, 45 ] , [ 2, 7, 21, 99 ]...etc ]
    }
    // siemre y cuando no haya una funcion devueleve el resultado por niveles
    if (!callback) return results;
  }
}

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
myTree.delete(80);
console.log('-------------------');

prettyPrint(myTree.root);
prettyPrint(myTree.find(55));

console.log(myTree.levelOrder());

// │       ┌── 99
// │       │   └── 89
// │   ┌── 45
// │   │   └── 21
// │   │       └── 9
// └── 8
//     │   ┌── 7
//     │   │   └── 5
//     └── 4
//         │   ┌── 3
//         └── 2
//             └── 1
