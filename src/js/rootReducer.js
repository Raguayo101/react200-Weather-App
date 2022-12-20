import { combineReducers } from "redux";
import SearchReducer from "./components/Search/searchReducer";

const rootReducer = combineReducers({
  search: SearchReducer,
});

export default rootReducer;
