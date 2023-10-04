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

  //forma mas optima, pero falta añadir mas estructura html de forma en js
  // for (let i = 0; i < 1; i++) {
  //   const blockDiv = document.createElement("div");
  //   const container = document.createElement("div");
  //   const hero = document.createElement("div");
  //   hero.classList.add("hero");
  //   container.appendChild(hero);
  //   container.classList.add("container");
  //   blockDiv.appendChild(container);

  //   switch (i) {
  //     case 0:
  //       blockDiv.classList.add("active");
  //       blockDiv.id = "home";
  //       const titleHome = document.createElement("h1");
  //       const parrfHome = document.createElement("p");
  //       const btnHome = document.createElement("button");
  //       titleHome.textContent = "Come on down for some delicious cuisine!";
  //       parrfHome.textContent = "Tasty and affordable!";
  //       btnHome.textContent = "Order Now";
  //       hero.append(titleHome, parrfHome, btnHome);

  //       const info = document.createElement("div");
  //       info.classList.add("info");

  //       for (let j = 0; j < 2; j++) {
  //         const card = document.createElement("div");
  //         card.classList.add("card");
  //         const icon = document.createElement("span");
  //         icon.classList.add("material-symbols-outlined");
  //         const parrCard = document.createElement("p");

  //         switch (j) {
  //           case 0:
  //             icon.textContent = "location_on";
  //             parrCard.innerHTML = "1024 Pakwood Ave <br />San diego, CA 22434";
  //             card.append(icon, parrCard);
  //             info.appendChild(card);
  //             break;
  //           case 1:
  //             icon.textContent = "schedule";
  //             parrCard.innerHTML =
  //               "<span>Mon-Thurs: </span>8am-8pm <br /> <span>Fri-Sun: </span>8am-11pm";
  //             card.append(icon, parrCard);
  //             info.appendChild(card);
  //             break;
  //         }
  //       }
  //       container.appendChild(info);
  //       break;

  //     default:
  //       break;
  //   }
  //   mainContent.appendChild(blockDiv);
  // }

  //estructura del codigo html
  mainContent.innerHTML = `<div id="home" class="active">
  <div class="container">
    <div class="hero">
      <h1>Come on down for some delicious cuisine!</h1>
      <p>Tasty and affordable!</p>
      <button class="btn btn-order">Order Now</button>
    </div>
    <div class="info">
      <div class="card">
        <span class="material-symbols-outlined"> location_on </span>
        <p>1024 Pakwood Ave <br />San diego, CA 22434</p>
      </div>
      <div class="card">
        <span class="material-symbols-outlined"> schedule </span>
        <p>
          <span>Mon-Thurs: </span>8am-8pm <br />
          <span>Fri-Sun: </span>8am-11pm
        </p>
      </div>
    </div>
  </div>
</div>
<div id="menu">
  <div class="container">
    <div class="hero">
      <h3>
        Menu <span class="material-symbols-outlined"> fastfood </span>
      </h3>
    </div>
    <div class="menu-container">
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png"
          alt=""
        />
        <div class="text-card">
          <h5>Hamburguer:<span>$12.49</span></h5>
          <p>
            Buns, patty, tomato, onions, lettuce, and our secret family
            recipe.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="contact">
  <div class="container">
    <div class="hero">
      <h3>Contact us</h3>
    </div>
    <div class="contact-container">
      <div class="contact-square">
        <div class="contact-form">
          <div class="form-info">
            <div class="item">
              <p>
                <span class="material-symbols-outlined">
                  location_on </span
                >1024 Oakwood Ave <br />
                San diego, CA 22434
              </p>
            </div>
            <div class="item">
              <p>
                <span class="material-symbols-outlined"> schedule </span
                >Mon-Thurs: 8am-8pm <br />
                Fri-Sun: 8am 11pm
              </p>
            </div>
            <div class="item">
              <p>
                <span class="material-symbols-outlined"> call </span
                >(222)-888 5555
              </p>
            </div>
          </div>
          <form action="#">
            <h4 class="form-title">
              <span class="material-symbols-outlined"> mail </span
              >Messege us
            </h4>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Type your message.."
            ></textarea>
            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
        <div class="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d969.8298650801368!2d-71.97896250564764!3d-13.515976266575954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMcDonalds!5e0!3m2!1ses!2spe!4v1696365020346!5m2!1ses!2spe"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>`;
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
