import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import EmployeeResults from "../components/EmployeeData";
import API from "../utils/API";

function Home() {
  // console.log({API});
  const [employeeState, setEmployeeState] = useState(
    {
      // filteredArray: [],
      employeeArray: []
    }
  );

  //Get a list of random employees from API
  const loadEmployees = () => {
    API.getRandomEmployee()
    //Then the setEmployeeState function runs. It will...
      .then(res => {
        setEmployeeState({
          //...spread the employeeState variable to get access to its employeeArray object and return the API results to store in the empty employeeArray
          ...employeeState,
          employeeArray: res.data.results
        })
      }) 
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadEmployees();
  },[]);

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
        {
          employeeState.employeeArray.map((employee) => {
            return (<EmployeeResults employeeData = {employee}/>)
          })
        }
      </Container>
    </div>
  );
};

export default Home;
