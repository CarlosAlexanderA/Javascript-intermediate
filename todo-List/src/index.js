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
let idNum = 0;
class ToDo {
  constructor(title, descripton, date, priority, project) {
    this.title = title;
    this.descripton = descripton;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.idCard = idNum++;
  }

  build() {
    const card = document.createElement("div");
    card.id = this.idCard;
    card.className = "card active";
    card.setAttribute("data-name", this.project);
    const checkInput = this.check();
    const left = document.createElement("div");
    left.className = "left";
    const right = document.createElement("div");
    right.className = "right";
    right.innerHTML = `<button id="dtl-note" class="btn-light">Details</button>
    <span id="fch-simple">${this.date}</span>`;
    right.append(this.edit(), this.delete());
    const cont = document.createElement("label");
    cont.className = "cont";
    const titleNote = document.createElement("h5");
    titleNote.className = "dsc-note";
    titleNote.textContent = this.title;
    cont.appendChild(checkInput);
    left.append(cont, titleNote);
    card.append(left, right);

    return card;
  }
  check() {
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.addEventListener("click", () => {
      const allChecked = document.querySelectorAll(
        `.card[data-name='${this.project}'] .cont input[type='checkbox']`
      );
      const checks = Array.from(allChecked).filter((check) => check.checked);

      console.log(checks.length);
      const countNote = document.querySelector(
        `main aside nav ul li a[data-name = '${this.project}'] > .number-round > span`
      );
      countNote.textContent = checks.length;
      console.log(countNote);
    });
    return checkInput;
  }
  delete() {
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "icon";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can";
    deleteBtn.appendChild(icon);
    deleteBtn.addEventListener("click", () => {
      listNotes.removeChild(document.getElementById(this.idCard));
    });
    return deleteBtn;
  }
  edit() {
    const editBtn = document.createElement("span");
    editBtn.className = "icon";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-pen-to-square";
    editBtn.appendChild(icon);
    editBtn.addEventListener("click", () => {
      console.log("edit button");
    });
    return editBtn;
  }
}
const options = document.querySelectorAll("main aside nav ul li a");
// console.log(options);
const notesList = () => {
  return document.querySelectorAll("main .main-container .list-notes .card");
};
// console.log(notesList()[0].classList.contains("active"));
const elementById = (id) => {
  return document.getElementById(id);
};
options.forEach((item) => {
  item.addEventListener("click", () => {
    options.forEach((item) => item.classList.remove("active"));
    item.classList.toggle("active");
    let filterName = item.dataset.name;
    notesList().forEach((note) => {
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
const btnChecked = () => {
  return document.querySelectorAll(".card .cont input[type='checkbox']");
};

// console.log(btnChecked()[0].parentElement);

let numcheck = 0;
let category = "week";
btnChecked().forEach((btn) => {
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
const example1 = new ToDo("example1", "example1", "24-04-06", "low", "week");
const example2 = new ToDo("example2", "example2", "24-04-06", "low", "week");
const example3 = new ToDo("example3", "example3", "24-04-06", "low", "today");
const example4 = new ToDo("example4", "example4", "24-04-06", "low", "gym");
const example5 = new ToDo("example5", "example5", "24-04-06", "low", "today");
const example6 = new ToDo("example6", "example6", "24-04-06", "low", "today");
const example7 = new ToDo("example7", "example7", "24-04-06", "low", "gym");
const example8 = new ToDo("example8", "example8", "24-04-06", "low", "gym");

// console.log(play.build());
// console.log(play.project);
const listNotes = document.querySelector(".main-container .list-notes");
listNotes.append(
  play.build(),
  example1.build(),
  example2.build(),
  example3.build(),
  example4.build(),
  example5.build(),
  example6.build(),
  example7.build(),
  example8.build()
);

console.log(elementById(0));
