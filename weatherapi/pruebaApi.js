const title = document.querySelector('h1');

fetch(
  'https://api.weatherapi.com/v1/current.json?key=fb20c1db913b4456a8341923231610&q=london',
  { mode: 'cors' }
)
  .then((response) => response.json())
  .then((response) => {
    title.innerText = response;
    console.log(response);
  });

const img = document.querySelector('img');
// fetch(
//   'https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat',
//   { mode: 'cors' }
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  console.log(name);
  getGifts(name);
});
async function getGifts(name) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${name}`,
    { mode: 'cors' }
  );
  const catchData = await response.json();
  console.log(catchData);
  img.src = catchData.data.images.original.url;
}

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     const data = await response.json();
//     return data;
//   }
//   console.log(response);
//   throw new Error(response);
// }
// loadJson('https://javascript.info/no-such-user.json').catch(alert); // Error: 404

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  }
  throw new HttpError(response);
}

// Pide nombres hasta que github devuelve un usuario válido
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Ingrese un nombre:', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404) {
        alert('No existe tal usuario, por favor reingrese.');
      } else {
        throw error;
      }
    }
  }
  alert(`Nombre completo: ${user.name}`);
  return user;
}

// demoGithubUser();

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((resolve) => alert(resolve));
}
f();
