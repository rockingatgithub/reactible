import React, { Component } from "react";
import ListItem from "./ListItem";
import { Container, Row } from "react-bootstrap";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div id="imagelist">
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
