import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./SearchBox.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const contactList = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  const onClickSearch = () => {
    // const filterList = contactList.filter((item) =>
    //   item.name.toLowerCase().includes(search.toLowerCase())
    // );

    dispatch({
      type: "ADD_CONTACT",
      payload: { ...state, name: search },
    });
  };
  // 찾기를 눌렀을 때 기존 contactList와 name 을 비교한 배열이 반환됨 - o
  // 문제 : store로 action 객체를 dispatch로 보낼때 객체를 보내야 하는데 배열로 생성됨

  // 반환된 filterList를 store로 전송
  // contactItem에서 랜더링

  return (
    <Row className="search-bar">
      <Col lg={10}>
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="이름을 입력 해주세요"
        />
      </Col>
      <Col lg={2}>
        <Button onClick={onClickSearch}>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
