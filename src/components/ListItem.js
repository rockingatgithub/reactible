// ===================================list items component====================================================

import React from "react";
import { Col } from "react-bootstrap";
function ListItem(props) {
  const { image } = props;
  return (
    <Col lg={3} md={4} sm={6} xs={12} className="imagebox">
      <div id="imagecard">
        <img
          src={image.previewURL}
          style={{ height: "240px", width: "200px" }}
          className="imageitem"
          alt="images"
        />
        <span className="imageuser">{image.user}</span>
        <br />
        <span className="imagefav">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"
            style={{ height: "20px", width: "20px" }}
            alt="Likes"
          />{" "}
          {image.likes}
        </span>
      </div>
    </Col>
  );
}

export default ListItem;
