import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ContactItem.css";

const ContactItem = ({ item }) => {
  return (
    <Row className="ContactItem">
      <Col lg={2}>
        <img
          width={50}
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt=""
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
