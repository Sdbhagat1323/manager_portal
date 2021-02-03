import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees, deleteEmployee } from "../../actions/employees";

export class Employee extends Component {
  static propTypes = {
    employees: PropTypes.array.isRequired,
    //add getEmployees and deleteEmployee proptypes
    getEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
  };
  //call that action before list load;
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    return (
      <Fragment>
        <h2>Employee Table</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Company</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName + " " + employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.company}</td>
                <td>
                  <button
                    onClick={this.props.deleteEmployee.bind(this, employee.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  // :employeesreduce to props called employees
});
// here we get access to employees in backend
// access to delete
export default connect(mapStateToProps, { getEmployees, deleteEmployee })(
  Employee
);
