

class Book{
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

}

const myLibrary = [
  new Book("El libro","Anonimo",153,true),
  new Book("El libro2","Anonimo2",1530,false)
];

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
const addBook = document.getElementById("addBook");
const bgClose = document.getElementById("close");
const modal = document.getElementById("modal");
const form = document.getElementById("miForm");
const library = document.querySelector(".library");

addBook.addEventListener("click", ()=>{
  modal.style.display = "flex";
  
});
const closeModal = () =>{
  modal.style.display = "none";
}
bgClose.addEventListener("click", closeModal)

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(e)
  closeModal();
  addBookToLibrary(form[0].value, form[1].value, form[2].value, form[3].checked);
  showBooks();
});

let buttonsRead, buttonsRemove;

const showBooks = () =>{
  library.innerHTML = "";
  let i = 0;
  myLibrary.forEach((elem) => {
    const book = document.createElement("div");
    book.className = `book book_${i++}`;
    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = elem.title;
    const author = document.createElement("h4");
    author.className = "author";
    author.textContent = elem.author;
    const pages = document.createElement("h5");
    pages.className = "pages";
    pages.textContent = elem.pages;
    const button1 = document.createElement("button");
    button1.className = `btn btnRead ${elem.read ? "green" : "red"}`;
    button1.textContent = `${elem.read ? "Read" : "Not Read"}`
    const button2 = document.createElement("button");
    button2.className = "btn btnRemove";
    button2.textContent = "Remove"
    book.append(title,author, pages, button1, button2)
    library.appendChild(book);
  });
  buttonsRead = document.querySelectorAll(".btnRead");
  buttonsRemove = document.querySelectorAll(".btnRemove");

  buttonsRead.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("green");
      btn.classList.toggle("red");
      btn.textContent = btn.classList.contains("green") ? "Read" : "Not Read";
      myLibrary[index].read = !myLibrary[index].read; // Actualiza el estado de lectura en el objeto Book
    });
  });
  
  buttonsRemove.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      showBooks();
    });
  });

};
showBooks();






