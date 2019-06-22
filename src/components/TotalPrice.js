import React from "react";
import { Col, Row } from "react-bootstrap";

function TotalPrice(props) {
  const total =
    props.price -
    props.saving +
    ((props.price - props.saving) * props.tax) / 100;
  return (
    <div>
      <Row className="totalRow">
        <Col>
          <h2>EST. total</h2>
        </Col>
        <Col>
          <h2>${total.toFixed(2)}</h2>
        </Col>
      </Row>
    </div>
  );
}

export default TotalPrice;
