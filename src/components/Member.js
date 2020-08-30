import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Member = ({ name, id, onClick }) => {
  const buttonClick = (type, id) => {
    onClick(type, id);
  };
  return (
    <Col lg={4} md={6} className="mb-5">
      <Card
        bg="info"
        text="white"
        style={{ width: "15rem" }}
        className="mb-2, text-center"
      >
        <Card.Header>
          <h5>{name}</h5>
        </Card.Header>
        <Card.Body>
          <Button variant="success" onClick={() => buttonClick("mother", id)}>
            Add Mother
          </Button>
          <Button variant="primary" onClick={() => buttonClick("father", id)}>
            Add Father
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Member;
