import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};
export default class pickupWithTooltip extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false
    };
  }

  render() {
    return (
      <div>
        <Row className="subtotalRow">
          <Col>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip">
                  <p>
                    picking up your order in the store helps out costs , and we
                    pass the savings on to you
                  </p>
                </Tooltip>
              }
            >
              <div style={styles.pickupSavings}>Pickup Savings</div>
            </OverlayTrigger>
          </Col>
          <Col style={styles.totalSavings}>$-{this.props.saving} </Col>
        </Row>
      </div>
    );
  }
}
