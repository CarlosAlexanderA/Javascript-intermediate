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
        // console.error('you cannot overwrite an existing node ');
        return null;
      }
      // recorremos nuestros Nodos
      if (value > myTree.value) {
        // si es mayor que vaya a la derecha
        if (myTree.right === null) {
          // si esta vacio agregamos el nuevo nodo
          const newNode = new Node(value);
          myTree.right = newNode;
          // console.warn('correctly added to the tree');
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
          // console.warn('correctly added to the tree');
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
  // In order => left root right
  inOrder(node = this.root, result = []) {
    // devuvelve todo ordenado segun su valor
    if (!this.root) return null;
    if (node === null) return; // para detener la recursion
    // se repite la funcion y se obtiene los datos de los dos lados
    // primero al izquierda luego el centro (root) y la derecha
    this.inOrder(node.left, result); // primero obtener el resultado de la izquierda
    result.push(node.value); // apregar los datos segun el result
    this.inOrder(node.right, result); // luego los datos de la derecha
    // devolver el array en orden
    if (result) return result;
  }
  // preorder => root left right
  preOrder() {
    if (!this.root) return [];
    const queue = [this.root]; // al array con los nodos que se iran eliminando
    const results = []; // se guarda el resultado final
    while (queue.length !== 0) {
      // hasta que no tengamos algun nodo se ejecuta
      const node = queue.pop(); // extrae el ultim nodo
      // validamos de derecha a izquierda, ya que elimanremos con pop el ultimo,
      // es decir 'left' y luego ireos a 'right'
      if (node.right !== null) queue.push(node.right); // agrega un nuevo elemento al array de 'queue'
      if (node.left !== null) queue.push(node.left); // agrega un nuevo elemento al array de 'queue'
      results.push(node.value); // agrega el valor al resultado
      // se obtiene del ultimo nodo
    }
    return results; // devuelve nuestro array
  }
  // postorder => left right root
  postOrder() {
    if (!this.root) return [];
    const stack = [this.root];
    const result = [];
    while (stack.length !== 0) {
      const node = stack.pop();
      if (node.left !== null) stack.push(node.left);
      if (node.right !== null) stack.push(node.right);
      result.push(node.value);
    }
    return result.reverse(); // se ordena de forma que solo tenemos que darlereversa
  }
  // devuvelve su altura, el camino mas largo para llegar a las hojas
  height(node = this.root) {
    if (!node) return -1;
    // decidimos cual es el camino mas largo
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    // escogemos tnre uno de estos y le simamos segune el camino
    return Math.max(leftHeight, rightHeight) + 1;
  }
  // la profundidad del nodo desde la raiz (root)
  depth(node) {
    let mainNodo = this.root;
    //
    let walk = 0;
    while (mainNodo !== null) {
      if (node.value === mainNodo.value) {
        return walk;
      }
      // buscamos el valor del nodo
      if (node.value > mainNodo.value) {
        mainNodo = mainNodo.right;
      } else if (node.value < mainNodo.value) {
        mainNodo = mainNodo.left;
      }
      // aumentamos en 1 el contador por cada camino
      walk++;
    }
  }
  // verifica que el arbol este equilibrado
  // la altura no es superior a uno(1)
  isBalance(node = this.root) {
    if (node === null) return true;
    // valor absoluto de la resta de los 2 nodos
    const heightDiff = Math.abs(
      this.height(node.left) - this.height(node.right)
    );
    // devolvemos true si esta balnacado o false
    return (
      heightDiff <= 1 && this.isBalance(node.left) && this.isBalance(node.right)
    );
  }
  // equilibra en arbol, en case que este desequilibrado
  rebalance() {
    if (this.root === null) return;
    // ordenamos de nuevo los datos, para evitar errores
    const sorted = [...new Set(this.inOrder().sort((a, b) => a - b))];
    // creamos un nuebo arbol con build
    this.root = this.build(sorted);
  }
}

const myTree = new Tree([1, 4, 2, 45, 8, 21, 89, 9, 3, 5, 7, 4, 99, 80]);

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
// prettyPrint(myTree.root);
// // console.log(myTree.root);
// // myTree.insert(6);

// // prettyPrint(myTree.insert(6));
// myTree.delete(80);
// console.log('-------------------');

// prettyPrint(myTree.root);
// prettyPrint(myTree.find(55));

// console.log(myTree.levelOrder());

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
// console.log(myTree.isBalance(myTree.find(4)));

// Todo Junto
// crear un arbol de busqueda binario a partir de una matriz de numero aleatiors < 100

const randomArray = (size) => {
  // array de numeros aleatorios segun el tamaño que le pases
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 500) + 1
  );
};

const newArrTree = randomArray(100);
const myNewTree = new Tree(newArrTree); // nuevo arbol
console.log('My tree from 100 data');
prettyPrint(myNewTree.root);
console.log(myNewTree.isBalance() ? 'it is balanced' : 'It is not balanced');
console.log('Level Orfre from the tree');
console.log(myNewTree.levelOrder());
console.log('Pre Order form the tree');
console.log(myNewTree.preOrder());
console.log('Post Order form the tree');
console.log(myNewTree.postOrder());
console.log('In Order form the tree');
console.log(myNewTree.inOrder());

for (let i = 0; i < 5; i++) {
  myNewTree.insert(Math.floor(Math.random() * 20));
}

prettyPrint(myNewTree.root);
console.log(myNewTree.isBalance() ? 'it is balanced' : 'It is not balanced');
myNewTree.rebalance();
prettyPrint(myNewTree.root);
console.log('Level Orfre from the tree');
console.log(myNewTree.levelOrder());
console.log('Pre Order form the tree');
console.log(myNewTree.preOrder());
console.log('Post Order form the tree');
console.log(myNewTree.postOrder());
console.log('In Order form the tree');
console.log(myNewTree.inOrder());
