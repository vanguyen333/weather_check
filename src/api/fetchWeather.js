import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1fd04e96168748072b4faf14a1b9ae63";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
