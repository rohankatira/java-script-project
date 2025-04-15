
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
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

async function update_weather_info(city) {
    const weather_data = await get_fetch_data('weather', city);
    if (weather_data.cod != 200) {  // Corrected property access
      show_Display_section(Not_found_section);
      return;
    }
    console.log(weather_data);
    
    const {
      name: country,
      main:{ temp, humidity},
      weather: [{id, main}],
      wind: speed
    }=weather_data

    country_txt.textContent = country
    temp_txt.textContent = meth.round(temp) + ' °C'
    show_Display_section(wheather_info_section);
}

function show_Display_section(section) {
  [wheather_info_section, Search_city_section, Not_found_section]
  .forEach(section => section.style.display = 'none');

  section.style.display = 'flex';
}