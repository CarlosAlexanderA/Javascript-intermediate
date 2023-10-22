// lista vinculada
class LinkedList {
  constructor(header = null) {
    this.header = header;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.header === null) {
      this.prepend(value);
    } else {
      let current = this.header;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  // agrega un nuevo nodo al inicio de la lista (header)
  prepend(value) {
    // crear la cabeza de la lista
    const headNode = new Node(value);
    this.header = headNode;
  }
  // total de nodos en la lista
  size() {
    let count = 0;
    let node = this.header;
    if (node === null) return count;

    while (node !== null) {
      // => si node es null entoces deja de contar
      count++;
      node = node.next;
    }
    return count;
  }
  // devuelve el primer nodo de la lista
  head() {
    return this.header;
  }
  // devuelve el ultimo elemento de la lista
  tail() {
    if (this.header === null) return null;
    let tail = this.header;
    // el ultimo elemento tiene null en su atributo '.next'
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }
  // devuelve el indice del nodo como un array
  // empieza en => 0, como un array normal
  atIndex(index) {
    let count = 0;
    let node = this.header;
    while (node !== null) {
      // si encuentra el indice devuelve el nodo
      if (count === index) return node;
      node = node.next;
      count++;
    }
    return null;
  }
  // elimina el ultimo elemento de la lista
  pop() {
    // cuando la lista este vacia
    if (!this.header) return null; // => null + ! == true
    // para un solo elemento en la lista
    if (!this.header.next) {
      this.header = null;
      return;
    }
    // elimnamos el vinculo del que vincula al ultimo
    let prevEnd = this.atIndex(this.size() - 2);
    prevEnd.next = null;
    return this.header;
  }
  // devuelve true o false si se encuentra en la lista
  contains(value) {
    let node = this.header;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }
  // devielve el incide del nodo que contiene el valor
  find(value) {
    let index = 0;
    let node = this.header;
    while (node !== null) {
      if (node.value === value) return index;
      index++;
      node = node.next;
    }
    return null;
  }
  // representa los objetos LinkedList como cadenas
  toString() {
    if (!this.header) return '(null)';
    let string = '';
    let node = this.header;
    while (node !== null) {
      string += `( ${node.value} ) -> `;
      node = node.next;
    }
    return string + '( null )'; // => ( value ) -> ( value ) -> ( value ) -> null
  }
}
// el item de la lista con un valor y el vinculo al siguiente nodo 'next'
class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.head());
console.log(myList.tail());
console.log(myList.size());
console.log(myList.atIndex(2));
console.log(myList.pop());
console.log(myList.contains(0));
console.log(myList.find(3));

console.log(myList.toString());
