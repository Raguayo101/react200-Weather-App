import React from "react";

export default class CityInfo extends React.Component {
  render() {
    const {
      name,
      main: { temp, pressure, humidity, temp_min, temp_max },
      wind: { speed },
      weather: {
        0: { main, icon },
      },
    } = this.props.cityData;

    return (
      <div className="col-12 col-md-6 mb-7">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center">
            {name == "" ? (
              <span></span>
            ) : (
              <div className="card weather-box border-0 shadow">
                <div className="card-body p-4">
                  <div className="d-flex">
                    <h3 className="flex-grow-1 text-center mt-3 mb-0">
                      {name}
                    </h3>
                  </div>

                  <div className="d-flex flex-column text-center mt-3 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold">{`${parseInt(
                      temp
                    )}°`}</h6>
                    <span className="small">{main}</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <div className="ms-1">Wind: {speed}</div>
                      <div className="ms-1">Pressure: {pressure}</div>
                      <div className="ms-1">Humidity: {humidity}</div>
                      <div className="ms-1">Min Temp: {temp_min}</div>
                      <div className="ms-1">Max Temp: {temp_max}</div>
                    </div>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        width="125px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
