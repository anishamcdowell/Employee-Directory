import Row from "../Row";
import Col from "../Col";

function EmployeeRow() {
    return (
      <Row>
        <Col size="md-3">
            <p>Image</p>
          </Col>
          <Col size="md-3">
            <p>Name</p>
          </Col>
          <Col size="md-3">
            <p>Phone</p>
          </Col>
          <Col size="md-3">
            <p>Email</p>
          </Col>
          <Col size="md-3">
            <p>DOB</p>
          </Col>
      </Row>
    );
}

export default EmployeeRow;