const defaultState = {
  city: "",
  cityData: {
    name: "",
    coord: { lon: "", lat: "" },
    main: {
      temp: "",
      pressure: "",
      humidity: "",
      temp_min: "",
      temp_max: "",
      humidity: "",
    },
    wind: { speed: "" },
    weather: { 0: { main: "", icon: "" } },
  },
  history: [],
};

export const SearchReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("payload", payload);
  switch (type) {
    case "UPDATE_SEARCH": {
      return {
        ...state,

        city: payload.city,
      };
    }

    case "GET_WEATHER_PENDING": {
      return {
        ...state,

        pending: true,
      };
    }

    case "GET_WEATHER_FULFILLED": {
      let now = new Date();
      return {
        ...state,

        cityData: payload.data,
        history: [
          ...state.history,
          {
            cityName: payload.data.name,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
