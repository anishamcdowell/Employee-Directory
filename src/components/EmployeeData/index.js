import React from "react";
import EmployeeRow from "../EmployeeRow";
import Col from "../Col";

function EmployeeResults({ employeeData }) {
  console.log({ employeeData });
  return (
      <EmployeeRow class="employee-row">
        <Col size="md-2">
            <img src ={employeeData.picture.large} />
          </Col>
          <Col size="md-2">
            <p>{`${employeeData.name.first} ${employeeData.name.last}`}</p>
          </Col>
          <Col size="md-2">
            <p>{employeeData.phone}</p>
          </Col>
          <Col size="md-3">
            <p>{employeeData.email}</p>
          </Col>
          <Col size="md-3">
            <p>{employeeData.dob.date}</p>
          </Col>
      </EmployeeRow>
    );
}

export default EmployeeResults;