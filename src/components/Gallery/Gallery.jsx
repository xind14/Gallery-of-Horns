
import React from "react";
import HornedBeast from "../HornedBeasts/HornedBeasts.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// import styles from './gallery.module.css';


function Gallery(props) {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {props.list.map((hornedBeast, index) => (
          <HornedBeast
            key={index}
            title={hornedBeast.title}
            _id={hornedBeast._id}
            imageUrl={hornedBeast.image_url}
            description={hornedBeast.description}
            keyword={hornedBeast.keyword}
            horns={hornedBeast.horns}
            userClick={() => props.onImageClick(hornedBeast)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;


