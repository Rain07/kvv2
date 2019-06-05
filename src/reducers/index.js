import { combineReducers } from "redux";
import DataReducer from "./reducer_weather";

const rootReducer = combineReducers({
  data: DataReducer
});

export default rootReducer;
