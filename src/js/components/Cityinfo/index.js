import { connect } from "react-redux";
import CityInfo from "./CityInfo";

// This function takes the store and returns an object
// that's passed to the props of the component.
const mapStoreToProps = (store) => {
  return {
    cityData: store.search.cityData,
  };
};

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(CityInfo);
