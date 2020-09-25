// =========================================display list components================================

import React, { Component } from "react";
import ListItem from "./ListItem";
import { Container, Row } from "react-bootstrap";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div id="imagelist">
        <h6 style={{ fontWeight: 600 }}>Checkout some popular shots</h6>
        <Container fluid>
          <Row noGutters>
            {list.map((image) => (
              <ListItem image={image} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default List;
