// const title = document.querySelector('h1');
const search = document.getElementById('search-location');
let tempScale = 'cls';
async function getJsonLocation(name) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=fb20c1db913b4456a8341923231610&q=${name}`,
    {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  const data = await response.json();
  // console.log(data);
  return data;
}

search.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');

  dataChange(name, tempScale);
});
const dataChange = (name, temp) => {
  const nameLocation = document.getElementById('name-location');
  const country = document.getElementById('country');
  const date = document.getElementById('date');
  const hour = document.getElementById('hour');
  const dataTemp = document.getElementById('data-temp');
  const feelLike = document.getElementById('feel-like');
  const temperature = document.getElementById('temperature');
  const humidity = document.getElementById('humidity');
  const uvIndex = document.getElementById('uv');
  const visibility = document.getElementById('visibility');
  const pressure = document.getElementById('pressure');
  const isDay = document.getElementById('is-day');
  const gust = document.getElementById('gust');
  const chanceRain = document.getElementById('chance-rain');
  getJsonLocation(name).then((data) => {
    const datetime = new Date(data.location.localtime);
    const dayName = getDayName(datetime.getDay());
    const monthName = getMonthName(datetime.getMonth());
    const hourSimple = `${datetime.getHours()}:${datetime.getMinutes()}`;
    const imageTemp = document.getElementById('img-temp');
    const wind = document.getElementById('wind');
    nameLocation.textContent = data.location.name;
    country.textContent = data.location.country;
    date.innerText = `${dayName} ${datetime.getDate()} ${monthName} ${datetime.getFullYear()}`;
    hour.textContent = hourSimple;
    imageTemp.src = data.current.condition.icon;
    temperature.textContent =
      temp === 'cls' ? data.current.temp_c : data.current.temp_f;
    dataTemp.textContent = data.current.condition.text;
    feelLike.textContent =
      temp === 'cls'
        ? Math.round(data.current.feelslike_c)
        : Math.round(data.current.feelslike_f);
    wind.textContent = Math.round(data.current.wind_mph * 0.44704) + 'm/s';
    humidity.textContent = data.current.humidity + '%';
    uvIndex.textContent = data.current.uv;
    visibility.textContent = data.current.vis_km + 'km';
    pressure.textContent = data.current.pressure_mb;
    gust.textContent = data.current.gust_kph + 'km';
    isDay.textContent = data.current.is_day === 1 ? 'yes' : 'no';

    chanceRain.textContent = 'N/A';
    console.log(data);
  });
  // console.log(jsonData);
};

const getDayName = (day) => {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';

    default:
      return '¡Nothing!';
  }
};
const getMonthName = (month) => {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';

    default:
      return 'Invalid Month';
  }
};

//   nameLocation.innerText = nameLoc;
// country = innerText = ;

dataChange('lima', tempScale);
