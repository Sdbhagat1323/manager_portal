// this is where we do all our requests.
// i use axios

import axios from "axios";
import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE } from "./types";

// GET Employees
// dispatch is done whenever you want to despatch the action to reduces

export const getEmployees = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/employee/")
    .then((res) => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Delete Employee

export const deleteEmployee = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/employee/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
// ADD Employee
export const addEmployee = (employee) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/employee/", employee)
    .then((res) => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response.data));
};
