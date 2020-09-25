import React, { Component } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

class SecondBar extends Component {
  render() {
    return (
      <div id="secondbar">
        <Container fluid>
          <Row noGutters>
            <Col lg={2}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={8}>
              <Button variant="link">Link</Button>
              <Button variant="link">Link</Button>
              <Button variant="link">Link</Button>
              <Button variant="link">Link</Button>
            </Col>
            <Col lg={2}>
              <Button variant="outline-secondary">Light</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SecondBar;
