import axios from "axios";

export const updateCity = (city) => {
  return {
    type: "UPDATE_SEARCH",
    payload: { city },
  };
};

export const getWeather = (city) => {
  return {
    type: "GET_WEATHER",
    payload: axios.get(`/search/${city}`),
  };
};
