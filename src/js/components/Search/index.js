import { connect } from "react-redux";
import Search from "./Search";

const mapStoreToProps = (store) => {
  return {
    city: store.search.city,
  };
};

export default connect(mapStoreToProps)(Search);
