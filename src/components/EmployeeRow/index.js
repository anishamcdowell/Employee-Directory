import Row from "../Row";
import Col from "../Col";

function EmployeeRow({ employeeData }) {
  console.log({ employeeData });
  return (
      <Row>
        <Col size="md-3">
            <img src ={employeeData.picture.large} />
          </Col>
          <Col size="md-3">
            <p>{`${employeeData.name.first} ${employeeData.name.last}`}</p>
          </Col>
          <Col size="md-3">
            <p>{employeeData.phone}</p>
          </Col>
          <Col size="md-3">
            <p>{employeeData.email}</p>
          </Col>
          <Col size="md-3">
            <p>{employeeData.dob.date}</p>
          </Col>
      </Row>
    );
}

export default EmployeeRow;