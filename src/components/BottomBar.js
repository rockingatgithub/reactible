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
              <p id="lastsectionpara">
                Dribbble is the world’s leading community for creatives to
                share, grow, and get hired.
              </p>
            </Col>
            <Col lg={3}>
              <h5>For designers</h5>
              <div> Go Pro!</div>
              <div> Explore design work </div>
              <div>Design blog </div>
              <div>Overtime podcast </div> <div>Code of conduct</div>
            </Col>
            <Col lg={3}>
              <h5>For designers</h5>
              <div> Go Pro!</div>
              <div> Explore design work </div>
              <div>Design blog </div>
              <div>Overtime podcast </div> <div>Code of conduct</div>
            </Col>
            <Col lg={3}>
              <div id="lastsectionpara1">
                Flawless design is easy with millions of ready-made assets to
                choose from Advertise on Dribbble
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BottomBar;
