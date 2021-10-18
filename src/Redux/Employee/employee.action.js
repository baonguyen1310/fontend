import { EmployeeTypes } from "./employee.types";

export const getEmployee = (emp) => ({
  type: EmployeeTypes.SET_CURRENT_EMPLOYEE,
  payload: emp,
});

export const addEmployee = (data) => ({
  type: EmployeeTypes.ADD_EMPLOYEE,
  payload: data,
});
