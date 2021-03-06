// ===================================second heading components====================================================

import React, { Component } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

class SecondBar extends Component {
  render() {
    return (
      <div id="secondbar">
        <Container fluid>
          <Row noGutters>
            <Col lg={2} md={1} sm={0}>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Following
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
            <Col lg={8} md={10} sm={12}>
              <Button variant="light">All</Button>
              <Button variant="link">Animation</Button>
              <Button variant="link">Branding</Button>
              <Button variant="link">Illustration</Button>
              <Button variant="link">Mobile</Button>
              <Button variant="link">Print</Button>
              <Button variant="link">Product Design</Button>
              <Button variant="link">Typography</Button>
              <Button variant="link">Web Design</Button>
            </Col>
            <Col lg={2} md={1} sm={0}>
              <Button variant="outline-secondary">Filter</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SecondBar;
