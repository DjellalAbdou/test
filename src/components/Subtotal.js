import React from "react";
import { Row, Col } from "react-bootstrap";

function Subtotal(props) {
  return (
    <div>
      <Row className="subtotalRow">
        <Col>Subtotal</Col>
        <Col>${props.price}</Col>
      </Row>
    </div>
  );
}

export default Subtotal;
