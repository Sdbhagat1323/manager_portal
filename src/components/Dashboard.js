import React, { Fragment } from "react";
import Form from "./Form";
import Employee from "./Employee";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Employee />
    </Fragment>
  );
}
