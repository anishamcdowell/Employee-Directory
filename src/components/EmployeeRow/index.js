import React from "react";

function EmployeeRow(props) {
  return <div className="row shadow p-3 mb-5 bg-white rounded border-top">{props.children}</div>;
}

export default EmployeeRow;
