import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt=""
        />
      </Col>
      <Col lg={10}>
        <div>정훈</div>
        <div>010-9909-4748</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
