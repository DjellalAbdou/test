import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <div>
        <Row className="subtotalRow">
          <Col>Est. taxes & fees (Based on 94085)</Col>
          <Col>
            $
            {(
              ((this.props.price - this.props.saving) * this.props.tax) /
              100
            ).toFixed(2)}
          </Col>
        </Row>
      </div>
    );
  }
}
