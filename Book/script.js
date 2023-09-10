const myLibrary = [
  new Book("El libro","Anonimo",153,"si"),
  new Book("El libro2","Anonimo2",1530,"si")
];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
const addBook = document.getElementById("addBook");
const bgClose = document.getElementById("close");
const modal = document.getElementById("modal");
const form = document.getElementById("miForm");
const library = document.querySelector(".library");
const book = document.createElement("div");
book.className = "book";
const title = document.createElement("h2");
title.className = "title";
const author = document.createElement("h4");
author.className = "author";
const pages = document.createElement("h5");
pages.className = "pages";
const button = document.createElement("button");
button.className = "btn";
addBook.addEventListener("click", ()=>{
  modal.style.display = "flex";
  
});
const closeModal = () =>{
  modal.style.display = "none";
}
bgClose.addEventListener("click", () =>{
  closeModal()
})

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("form enviado sin recarga")
  closeModal()
  addBookToLibrary("Hello", "Hello", "Hello", "Hello");
});
book.append(title,author, pages, button)
library.appendChild(book);
const showBooks = () =>{
  myLibrary.forEach((elem) => {
    console.log(elem);
  });
};

showBooks()