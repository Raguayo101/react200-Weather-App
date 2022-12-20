import React from "react";

import { updateSearch, getWeather } from "./searchActions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const city = event.target.value;

    dispatch(updateSearch(city));
  }

  handleClick(city) {
    console.log("hello");
    const { dispatch } = this.props;
    dispatch(getWeather(city));
    console.log("27", this.props);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick("San Diego")}
        >
          San Diego
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick("New York")}
        >
          New York
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick("Washington D.C.")}
        >
          Washington D.C.
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick("London")}
        >
          London
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick("Tokyo")}
        >
          Tokyo
        </button>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={this.props.city}
            onChange={(event) => this.handleSearchInput(event)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => this.handleClick(this.props.city)}
          >
            Go!
          </button>
        </div>
      </div>
    );
  }
}
