import "./style.css";
const { format, parse } = require("date-fns");
const btnAdd = document.getElementById("btn-add");
const modalFrame = document.getElementById("modal-add");
const closeModal = document.getElementById("close-modal");
btnAdd.addEventListener("click", () => {
  modalFrame.style.display = "flex";
});
const closeadd = () => {
  modalFrame.style.display = "none";
};
closeModal.addEventListener("click", closeadd);
let idNum = 0;
class ToDo {
  constructor(title, descripton, date, priority, project) {
    this.title = title;
    this.descripton = descripton;
    this.date = date;
    const inputDate = date;

    const parsedDate = parse(inputDate, "yyyy-MM-dd", new Date());

    const formattedDate = format(parsedDate, "MMM");

    const dayOfMonth = format(parsedDate, "do");

    this.date = `${formattedDate} ${dayOfMonth}`;

    this.priority = priority;
    this.project = project;
    this.idCard = idNum++;
  }

  build() {
    const card = document.createElement("div");
    card.id = this.idCard;
    card.className = `card active ${
      this.priority === "lower"
        ? "lower"
        : this.priority === "medium"
        ? "medium"
        : "high"
    }`;
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
      const checks = Array.from(allChecked).filter((check) => !check.checked);

      console.log(checks);
      const countNote = document.querySelector(
        `main aside nav ul li a.other-list ~ ul li a[data-name = '${this.project}'] > .number-round > span`
      );

      countNote.textContent = checks.length;
      const hideNum = document.querySelector(
        `main aside nav ul li a.other-list ~ ul li a[data-name = '${this.project}'] > .number-round`
      );
      if (countNote.textContent == 0) {
        hideNum.style.display = "none";
      } else {
        hideNum.style.display = "flex";
      }

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
  modal() {}
}
const notesList = () => {
  return document.querySelectorAll("main .main-container .list-notes .card");
};

const play = new ToDo("play", "play with friends", "2022-11-06", "low", "gym");
const example1 = new ToDo("example1", "example1", "2022-11-06", "low", "week");
const example2 = new ToDo("example2", "example2", "2022-11-06", "low", "week");
const example3 = new ToDo("example3", "example3", "2022-11-06", "low", "today");
const example4 = new ToDo("example4", "example4", "2022-11-06", "low", "gym");
const example5 = new ToDo("example5", "example5", "2022-11-06", "low", "today");
const example6 = new ToDo("example6", "example6", "2022-11-06", "low", "today");
const example7 = new ToDo("example7", "example7", "2022-11-06", "low", "gym");
const example8 = new ToDo("example8", "example8", "2022-11-06", "low", "gym");

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

// console.log(elementById(0));

const addToDo = document.getElementById("add-to-do");

addToDo.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const title = formData.get("title");
  const detail = formData.get("detail");
  const datetime = formData.get("datetime");
  const priority = formData.get("priority");
  const project = formData.get("project");
  console.log(formData);
  console.log(project);

  // console.log(formData);
  const card = new ToDo(title, detail, datetime, priority, project);
  listNotes.appendChild(card.build());

  closeadd();
});
class Project {
  constructor(name) {
    this.name = name;
  }
  build() {
    const link = document.createElement("li");
    const options = "main aside nav ul a.other-list ~ ul > li > a";
    const linkRef = linkListener(options, notesList());
    linkRef.setAttribute("href", "#");
    linkRef.setAttribute("data-name", this.name);
    const text = document.createElement("span");
    text.textContent = this.name.replace(/^\w/, (c) => c.toUpperCase());
    const numList = document.createElement("div");
    numList.classList.add("number-round");
    const allChecked = document.querySelectorAll(
      `.card[data-name='${this.project}'] .cont input[type='checkbox']`
    );
    const checks = Array.from(allChecked).filter((check) => !check.checked);

    numList.innerHTML = `<span>${checks.length}</span>`;
    linkRef.append(text, numList);
    link.appendChild(linkRef);
    this.select();
    return link;
  }
  select() {
    const selectContent = document.getElementById("project");
    const option = document.createElement("option");
    option.textContent = this.name;
    option.value = this.name;
    selectContent.appendChild(option);
  }
}
const linkListener = (links, notes) => {
  const aLink = document.createElement("a");
  aLink.addEventListener("click", () => {
    const options = document.querySelectorAll(links);
    options.forEach((item) => {
      item.classList.remove("active");
      console.log(item);
    });
    console.log(links);
    aLink.classList.add("active");
    let filterName = aLink.dataset.name;
    notes.forEach((note) => {
      const nameNote = note.dataset.name;
      if (filterName === nameNote || filterName === "all") {
        if (!note.classList.contains("active")) note.classList.add("active");
      } else {
        note.classList.remove("active");
      }
    });
    // console.log(options);
  });

  return aLink;
};

const aPRueba = new Project("hello");
const prueba2 = new Project("prueba2");
const prueba3 = new Project("prueba3");

// console.log(aPRueba.build().children);
const projectLinks = document.querySelector(
  "main aside nav ul li a.other-list ~ ul"
);
projectLinks.append(aPRueba.build(), prueba2.build(), prueba3.build());
// console.log(projectLinks);

const modalOptions = document.querySelector("#modal-add .left-form > ul");
// console.log(modalOptions);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  const option = "#modal-add .left-form  ul li a";
  const formList = document.querySelectorAll("#modal-add .square-form form");
  console.log(formList);
  console.log(option);
  const a = linkListener(option, formList);
  const span = document.createElement("span");
  span.textContent = `${i === 0 ? "To Do" : i === 1 ? "Project" : "Notes"}`;
  a.setAttribute(
    "data-name",
    `${i === 0 ? "to-do" : i === 1 ? "project" : "notes"}`
  );
  a.appendChild(span);

  li.appendChild(a);
  modalOptions.appendChild(li);
}

const addProject = document.getElementById("add-project");

addProject.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const name = formData.get("name");

  console.log(formData);
  console.log(name);

  // console.log(formData);
  const project = new Project(name);
  projectLinks.appendChild(project.build());

  closeadd();
});
