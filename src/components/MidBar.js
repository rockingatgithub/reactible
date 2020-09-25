// ===================================middle paragraph components====================================================

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MidBar extends Component {
  render() {
    return (
      <div id="midbar">
        <Container fluid>
          <Row noGutters>
            <Col id="midbarcol">
              <h3>Your following suggestions will appear here</h3>
              <div>Find friends you already know from Twitter.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MidBar;
