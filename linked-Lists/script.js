// losta vinculada
class LinkedLis {
  append(value) {
    const newNode = new Node(value);
  }
  // agrega un nuevo nodo al inicio de la lista (head)
  prepend(value) {
    // crear la cabeza de la lista
    const headNode = new Node(value);
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
  }
  nextNode() {
    return null;
  }
}
console.log(new Node());
