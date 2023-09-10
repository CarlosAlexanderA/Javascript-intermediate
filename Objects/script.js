function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>  `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet.`  
}

let oneBook = new Book("El libro", "anonimo",50,"not read");

console.log(oneBook.pages);
console.log(oneBook.info())
console.log(Object.getPrototypeOf(Book))

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')

  Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 }

player1.sayHello();
player2.sayHello();


var buz = {
    fog: "stack",
  };
  
  for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
      alert("this is fog (" + name + ") for sure. Value: " + buz[name]);
    } else {
      alert(name); // toString or something else
    }
  }
  