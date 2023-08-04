const API_KEY = "5f961a4ccf1aac8fa74ef5c5b92f4fd2";
const makeIconURL=(iconID)=>`http://openweathermap.org/img/w/${iconID}.png`
const getWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const {
    weather,
    main: { feels_like, temp, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
//http://openweathermap.org/img/w/10d.png
  return {
    description,
    feels_like,
    temp,
    temp_max,
    temp_min,
    pressure,
    humidity,
    name,
    iconURL:makeIconURL(icon),
    speed,
    country,
  };
};
export { getWeatherData };
