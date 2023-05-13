import axios from 'axios'

const getFormatedData = async (City) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.REACT_APP_APIKEY}&units=metric`;

    const response = await axios.get(URL);
    console.log(response)
    const {
      weather,
      coord: { lon, lat },
      main: { temp, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name
    } = response.data;

    const { description } = weather[0];

    return {
      lon,
      lat,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      description,
      name
    };
  } catch (error) {
    throw error;
  }
};

export default getFormatedData;