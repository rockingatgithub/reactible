// ===================================last navbar components=========================================================

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class BottomBar extends Component {
  render() {
    return (
      <div id="bottombar">
        <Container fluid>
          <Row noGutters>
            <Col lg={3}>
              <h3 className="bottombarbox" id="bottombarboxhead">
                Reactible
              </h3>
              <p id="lastsectionpara" className="bottombarbox">
                Dribbble is the world’s leading community for creatives to
                share, grow, and get hired.
              </p>
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg"
                  style={{ height: "20px", width: "20px", marginLeft: "10px" }}
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg"
                  style={{ height: "20px", width: "20px", marginLeft: "10px" }}
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1051/1051309.svg"
                  style={{ height: "20px", width: "20px", marginLeft: "10px" }}
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1384/1384023.svg"
                  style={{ height: "20px", width: "20px", marginLeft: "10px" }}
                />
              </div>
            </Col>
            <Col lg={3}>
              <h5 className="bottombarbox">For designers</h5>
              <div className="bottombarbox"> Go Pro!</div>
              <div className="bottombarbox"> Explore design work </div>
              <div className="bottombarbox">Design blog </div>
              <div className="bottombarbox">Overtime podcast </div>{" "}
              <div className="bottombarbox">Code of conduct</div>
            </Col>
            <Col lg={3}>
              <h5 className="bottombarbox">For designers</h5>
              <div className="bottombarbox"> Go Pro!</div>
              <div className="bottombarbox"> Explore design work </div>
              <div className="bottombarbox">Design blog </div>
              <div className="bottombarbox">Overtime podcast </div>{" "}
              <div className="bottombarbox">Code of conduct</div>
            </Col>
            <Col lg={3}>
              <div id="lastsectionpara1" className="bottombarbox">
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
