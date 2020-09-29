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
            src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"
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
