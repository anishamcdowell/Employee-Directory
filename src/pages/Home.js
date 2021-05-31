import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import EmployeeRow from "../components/EmployeeRow"

function Home() {
  return (
    <div>
      <Hero>
        <h1>Employee Directory</h1>
        <h2>Click on carrots to filter by heading or use the search box to narrow your results.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SearchForm />
          </Col>
        </Row>
        <EmployeeRow />
      </Container>
    </div>
  );
}

export default Home;
