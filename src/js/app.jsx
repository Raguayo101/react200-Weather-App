import React from "react";

import Search from "./components/Search";
import CityInfo from "./components/Cityinfo";
import SearchHistory from "./components/History";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-3 text-center">Weather App</h1>

        <Search />

        <div className="row">
          <CityInfo />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
