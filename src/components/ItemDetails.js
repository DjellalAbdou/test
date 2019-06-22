import React, { Component } from "react";
import { Button, Collapse, Row, Col, Container, Image } from "react-bootstrap";
import Chair from "./../assets/chair.jpg";
export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          variant="outline-primary"
          id="buttonhideandshow"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open ? " Hide " : " See "} item details
          {this.state.open ? " - " : " + "}
        </Button>
        <Collapse in={this.state.open}>
          <Container>
            <Row className="itemDetails">
              <Col>
                <Image
                  src={Chair}
                  width={150}
                  height={150}
                  alt="gaming chair"
                  rounded
                />
              </Col>
              <Col />
            </Row>
          </Container>
        </Collapse>
      </div>
    );
  }
}
