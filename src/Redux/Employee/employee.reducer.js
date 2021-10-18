import { EmployeeTypes } from "./employee.types";
const INITIAL_STATE = {
  employees: [],
};
const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeTypes.SET_CURRENT_EMPLOYEE:
      console.log("reducer");
      console.log(...state);
      return {
        ...state,
        employees: action.payload,
      };
    case EmployeeTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    default:
      return state;
  }
};

export default employeeReducer;
