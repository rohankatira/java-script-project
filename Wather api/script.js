const city_input = document.querySelector('.city_input');
const search_btn = document.querySelector('.search_btn');
const Not_found_section = document.querySelector('.not-found');
const Search_city_section = document.querySelector('.Search_city');
const wheather_info_section = document.querySelector('.Wheather_info');
const country_txt = document.querySelector('.country_txt');
const temp_txt = document.querySelector('.temp_txt');
const condition_txt = document.querySelector('.condition_txt');
const humidity_value_txt = document.querySelector('.humidity_value_txt');
const wind_value_txt = document.querySelector('.wind_value_txt');
const whather_summer_img = document.querySelector('.whather_summer_img');
const current_date_txt = document.querySelector('.current_date_txt');
const forecast_items_container = document.querySelector('.forecast_items_container');

const api_key = 'bbd06a032c4bc18f58431b57aecdd2a1';

search_btn.addEventListener('click', () => {
  if (city_input.value.trim() !== '') {
    update_weather_info(city_input.value);
    city_input.value = '';
    city_input.blur();
  }
});

city_input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && city_input.value.trim() !== '') {
    update_weather_info(city_input.value);
    city_input.value = '';
    city_input.blur();
  }
});

async function get_fetch_data(end_point, city) {
  const api_url = `https://api.openweathermap.org/data/2.5/${end_point}?q=${city}&APPID=${api_key}&units=metric`;

  const response = await fetch(api_url);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
  }

  return response.json();
}

function get_weather_Icon(id) {
  if (id <= 232) return 'thunderstorm.svg';
  if (id <= 321) return 'drizzle.svg';
  if (id <= 531) return 'rain.svg';
  if (id <= 622) return 'snow.svg';
  if (id <= 781) return 'atmosphere.svg';
  if (id === 800) return 'clear.svg';
  return 'clouds.svg';
}

function get_current_date() {
  const current_date = new Date();
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  };
  return current_date.toLocaleDateString('en-GB', options);
}

async function update_weather_info(city) {
  try {
    const weather_data = await get_fetch_data('weather', city);

    const {
      name: country,
      main: { temp, humidity },
      weather: [{ id, main }],
      wind: { speed }
    } = weather_data;

    country_txt.textContent = country;
    temp_txt.textContent = Math.round(temp) + ' °C';
    humidity_value_txt.textContent = humidity + '%';
    wind_value_txt.textContent = speed + ' m/s';
    condition_txt.textContent = main;
    current_date_txt.textContent = get_current_date();
    whather_summer_img.src = `assets/weather/${get_weather_Icon(id)}`;

    await update_forecast_info(city);
    show_Display_section(wheather_info_section);
  } catch (error) {
    console.error(error);
    show_Display_section(Not_found_section);
  }
}

async function update_forecast_info(city) {
  try {
    const fore_cast_data = await get_fetch_data('forecast', city);
    const time_taken = '12:00:00';
    const today_date = new Date().toISOString().split('T')[0];

    forecast_items_container.innerHTML = '';

    fore_cast_data.list.forEach(forecast => {
      if (
        forecast.dt_txt.includes(time_taken) &&
        !forecast.dt_txt.includes(today_date)
      ) {
        update_forecast_items(forecast);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function update_forecast_items(weather_data) {
  const {
    dt_txt,
    weather: [{ id }],
    main: { temp }
  } = weather_data;

  const date = new Date(dt_txt);
  const options = {
    day: '2-digit',
    month: 'short'
  };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const forecast_item = `
    <div class="forecast_item">
      <h5 class="forecast_item_date regular_txt">${formattedDate}</h5>
      <img src="assets/weather/${get_weather_Icon(id)}" class="forecast_item_image">
      <h5 class="forecast_item_temp">${Math.round(temp)} °C</h5>
    </div>
  `;

  forecast_items_container.insertAdjacentHTML('beforeend', forecast_item);
}

function show_Display_section(section) {
  [wheather_info_section, Search_city_section, Not_found_section]
    .forEach(sec => sec.style.display = 'none');

  section.style.display = 'flex';
}
