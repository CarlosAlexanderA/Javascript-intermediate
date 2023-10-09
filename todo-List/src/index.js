import "./style.css";

const addToDo = document.getElementById("add-to-do");
const modalFrame = document.getElementById("modal-add");
const closeModal = document.getElementById("close-modal");
addToDo.addEventListener("click", () => {
  modalFrame.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modalFrame.style.display = "none";
});

class ToDo {
  constructor(title, descripton, date, priority, project) {
    this.title = title;
    this.descripton = descripton;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }

  build() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-name", this.project);
    card.innerHTML = `
      <div class="left">
        <label class="cont">
          <input type="checkbox"/>
        </label>
        <h5 class="dsc-note">${this.title}</h5>
      </div>
      <div class="right">
        <button id="dtl-note" class="btn-light">Details</button>
        <span id="fch-simple">${this.date}</span>
        <span class="icon" id="edit-note">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span class="icon" id="del-note">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </div>`;
    return card;
  }
}
const options = document.querySelectorAll("main aside nav ul li a");
console.log(options);
const notesList = document.querySelectorAll(
  "main .main-container .list-notes .card"
);
console.log(notesList[0].classList.contains("active"));

options.forEach((item) => {
  item.addEventListener("click", () => {
    options.forEach((item) => item.classList.remove("active"));
    item.classList.toggle("active");
    let filterName = item.dataset.name;
    notesList.forEach((note) => {
      const nameNote = note.dataset.name;
      console.log(nameNote);
      if (filterName === nameNote || filterName === "all") {
        if (!note.classList.contains("active")) {
          note.classList.add("active");
        }
      } else {
        note.classList.remove("active");
      }
    });
  });
});
const btnChecked = document.querySelectorAll(
  ".card .cont input[type='checkbox']"
);

console.log(btnChecked[0].parentElement);

let numcheck = 0;
let category = "week";
btnChecked.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.checked === true) {
      numcheck++;
      console.log(btn);
      const numberCount = document.querySelector(
        `main aside nav a[data-name='${category}'] .number-round > span`
      );
      console.log(numberCount);
      numberCount.textContent = numcheck;
    }
  });
});
const play = new ToDo("play", "play with friends", "24-04-06", "low", "gym");
// console.log(play.build());

const listNotes = document.querySelector(".main-container .list-notes");
listNotes.appendChild(play.build());
console.log(listNotes);
