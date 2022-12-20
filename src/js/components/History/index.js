import { connect } from "react-redux";
import History from "./History";

const mapStoreToProps = (store) => {
  return {
    history: store.search.history,
  };
};

export default connect(mapStoreToProps)(History);
