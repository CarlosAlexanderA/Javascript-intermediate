const title = document.querySelector('h1');

fetch(
  'https://api.weatherapi.com/v1/current.json?key=fb20c1db913b4456a8341923231610&q=london',
  { mode: 'cors' }
)
  .then((response) => response.json())
  .then((response) => {
    title.innerText = response.location.country;
    console.log(response.location.country);
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

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${name}`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(e);
    });
});
