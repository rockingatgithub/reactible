import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class BottomBar extends Component {
  render() {
    return (
      <div id="bottombar">
        <Container fluid>
          <Row noGutters>
            <Col lg={3}>
              <h3>Reactible</h3>
              <p>
                Dribbble is the world’s leading community for creatives to
                share, grow, and get hired.
              </p>
            </Col>
            <Col lg={3}>
              <h5>For designers</h5>
              <span> Go Pro!</span>
              <span> Explore design work </span>
              <span>Design blog </span>
              <span>Overtime podcast </span> <span>Code of conduct</span>
            </Col>
            <Col lg={3}>
              <h5>For designers</h5>
              <span> Go Pro!</span>
              <span> Explore design work </span>
              <span>Design blog </span>
              <span>Overtime podcast </span> <span>Code of conduct</span>
            </Col>
            <Col lg={3}>
              <span>
                Flawless design is easy with millions of ready-made assets to
                choose from Advertise on Dribbble
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BottomBar;
