import { connect } from "react-redux";
import CityInfo from "./CityInfo";


const mapStoreToProps = (store) => {
  return {
    cityData: store.search.cityData,
  };
};


export default connect(mapStoreToProps)(CityInfo);
