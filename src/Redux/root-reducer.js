import { combineReducers } from "redux";

import empReducer from "./Employee/employee.reducer";
export default combineReducers({
  emp: empReducer,
});
