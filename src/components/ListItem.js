import React from "react";
import { Col } from "react-bootstrap";
function ListItem(props) {
  const { image } = props;
  return (
    <Col lg={3} className="imagebox">
      <img
        src={image.previewURL}
        style={{ height: "240px", width: "200px" }}
        className="imageitem"
      />
    </Col>
  );
}

export default ListItem;
