import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEmployee } from "../actions/employees";

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    date_of_birth: "",
    address: "",
    city: "",
    company: "",
  };

  static propTypes = {
    addEmployee: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // construct the lead: the values in state
    const {
      firstName,
      lastName,
      email,
      mobile,
      password,
      date_of_birth,
      address,
      city,
      company,
    } = this.state;

    const employee = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      date_of_birth,
      address,
      city,
      company,
    };
    this.props.addEmployee(employee);
  };

  render() {
    // value pullout for the state
    const {
      firstName,
      lastName,
      email,
      mobile,
      password,
      date_of_birth,
      address,
      city,
      company,
    } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Employee</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.onChange}
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.onChange}
              value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              className="form-control"
              type="number"
              name="mobile"
              onChange={this.onChange}
              value={mobile}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth </label>
            <input
              className="form-control"
              type="date"
              name="date_of_birth"
              onChange={this.onChange}
              value={date_of_birth}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              type="text"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <textarea
              className="form-control"
              type="text"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <textarea
              className="form-control"
              type="text"
              name="company"
              onChange={this.onChange}
              value={company}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addEmployee })(Form);
