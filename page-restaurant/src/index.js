import "./style.css";

function header() {
  const head = document.createElement("header");
  head.classList.add("header");
  const container = document.createElement("div");
  container.classList.add("container");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const logoLetter = document.createElement("h2");
  logoLetter.innerText = "Foot-on-a-Plate";
  logo.appendChild(logoLetter);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    const alink = document.createElement("a");
    alink.href = "#";
    alink.className = `link ${i === 0 ? "on" : ""}`;

    switch (i) {
      case 0:
        alink.id = "at-home";
        alink.textContent = "Home";
        break;
      case 1:
        alink.id = "at-menu";
        alink.textContent = "Menu";
        break;
      case 2:
        alink.id = "at-contact";
        alink.textContent = "Contact us";
        break;
    }
    li.appendChild(alink);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  container.append(logo, nav);
  head.appendChild(container);

  return head;
}

function main() {
  const mainContent = document.createElement("main");
  for (let i = 0; i < 1; i++) {
    const blockDiv = document.createElement("div");
    const container = document.createElement("div");
    const hero = document.createElement("div");
    hero.classList.add("hero");
    container.appendChild(hero);
    container.classList.add("container");
    blockDiv.appendChild(container);

    switch (i) {
      case 0:
        blockDiv.classList.add("active");
        blockDiv.id = "home";
        const titleHome = document.createElement("h1");
        const parrfHome = document.createElement("p");
        const btnHome = document.createElement("button");
        titleHome.textContent = "Come on down for some delicious cuisine!";
        parrfHome.textContent = "Tasty and affordable!";
        btnHome.textContent = "Order Now";
        hero.append(titleHome, parrfHome, btnHome);

        const info = document.createElement("div");
        info.classList.add("info");

        for (let j = 0; j < 2; j++) {
          const card = document.createElement("div");
          card.classList.add("card");
          const icon = document.createElement("span");
          icon.classList.add("material-symbols-outlined");
          const parrCard = document.createElement("p");

          switch (j) {
            case 0:
              icon.textContent = "location_on";
              parrCard.innerHTML = "1024 Pakwood Ave <br />San diego, CA 22434";
              card.append(icon, parrCard);
              info.appendChild(card);
              break;
            case 1:
              icon.textContent = "schedule";
              parrCard.innerHTML =
                "<span>Mon-Thurs: </span>8am-8pm <br /> <span>Fri-Sun: </span>8am-11pm";
              card.append(icon, parrCard);
              info.appendChild(card);
              break;
          }
        }
        container.appendChild(info);
        break;

      default:
        break;
    }
    mainContent.appendChild(blockDiv);
  }
  return mainContent;
}

const content = document.getElementById("content");
content.append(header(), main());

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const links = document.querySelectorAll(".link");
links.forEach((link, index) => {
  link.addEventListener("click", (item) => {
    links.forEach((link) => link.classList.remove("on"));

    link.classList.add("on");
    switch (item.target.id) {
      case "at-home":
        menu.classList.remove("active");
        contact.classList.remove("active");
        home.classList.add("active");
        break;
      case "at-menu":
        home.classList.remove("active");
        contact.classList.remove("active");
        menu.classList.add("active");

        break;
      case "at-contact":
        home.classList.remove("active");
        menu.classList.remove("active");
        contact.classList.add("active");
        break;

      default:
        break;
    }
  });
});
