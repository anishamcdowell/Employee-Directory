import React from "react";

function EmployeeRow(props) {
  return <div className="row text-center shadow pt-4 pb-3 mb-5 bg-white rounded border-top">{props.children}</div>;
}

export default EmployeeRow;
