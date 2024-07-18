import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./SearchBox.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_CONTACT",
      payload: { keyword },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className="search-bar">
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력 해주세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
