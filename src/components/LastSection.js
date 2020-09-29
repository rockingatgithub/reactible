// ========================================================last section components==========================

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LastSection(props) {
  return (
    <div id="lastsection">
      <Container fluid>
        <Row noGutters className="lastone">
          <Col lg={4} sm={12}>
            © 2020 Dribbble. All rights reserved.
          </Col>
          <Col lg={4} sm={12}>
            Made with ♥ remotely from <span>Sudhendra Singh</span>
          </Col>
          <Col lg={4} sm={12}>
            14,269,640 shots dribbbled
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LastSection;
