import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  const handleClick = () => {
    setFavorites(favorites + 1);
  };

  return (

      <Col
        key={props._id}
        style={{ marginBottom: "15px", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "30rem",
            height: "25rem",
            justifyContent: "center",
            verticalAlign: "center",
            border: "solid black",
          }}
        >
          <Card.Img
            variant="top"
            src={props.imageUrl}
            alt={props.keyword}
            style={{ height: "50%", width: "100%", objectFit: "contain" }}
            onClick={props.userClick}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>❤️ Favorites: {favorites}</Card.Text>
            <Button onClick={handleClick} variant="primary">
              Vote for {props.title}
            </Button>
          </Card.Body>
        </Card>
      </Col>

  );
}

export default HornedBeast;

