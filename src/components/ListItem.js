// ===================================list items component====================================================

import React from "react";
import { Col } from "react-bootstrap";
function ListItem(props) {
  const { image } = props;
  return (
    <Col lg={3} md={4} sm={6} xs={12} className="imagebox">
      <a href={image.webformatURL} download="myimage.jpg">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/3516/3516098.svg"
          className="downloadimage"
        />
      </a>
      <div id="imagecard">
        <img
          src={image.previewURL}
          style={{ height: "240px", width: "244px" }}
          className="imageitem"
          alt="images"
        />
        <span className="imageuser">{image.user}</span>
        <br />
        <span className="imagefav">
          <img
            src="data:image/jpeg;base64,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"
            style={{ height: "20px", width: "20px" }}
            alt="Likes"
          />{" "}
          {image.likes}
        </span>
        <span className="imagecomments">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/937/937819.svg"
            style={{ height: "20px", width: "20px" }}
            alt="Likes"
          />{" "}
          {image.comments}
        </span>
      </div>
    </Col>
  );
}

export default ListItem;
