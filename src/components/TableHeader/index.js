import React from "react";
import HeaderRow from "../HeaderRow";
import Col from "../Col";
import "./style.css";

function TableHeader() {
    return(
        <HeaderRow backgroundColor="#808080">
            <Col size="md-2">
                <p>Image</p>
            </Col>
            <Col size="md-2">
                <p>Name</p>
            </Col>
            <Col size="md-2">
                <p>Phone Number</p>
            </Col>
            <Col size="md-3">
                <p>Email</p>
            </Col>
            <Col size="md-3">
                <p>DOB</p>
            </Col>
        </HeaderRow>
    )
}

export default TableHeader;