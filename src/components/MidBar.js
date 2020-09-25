import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MidBar extends Component {
  render() {
    return (
      <div id="midbar">
        <Container fluid>
          <Row noGutters>
            <Col>
              <h3>You aren’t following anyone yet</h3>
              <div>Find friends you already know from Twitter.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MidBar;
