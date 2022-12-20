import { connect } from "react-redux";
import Search from "./Search";

const mapStoreToProps = (store) => {
  return {
    city: store.search.city,
  };
};

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(Search);
