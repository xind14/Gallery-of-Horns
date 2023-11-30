


import React from "react";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
// import SelectedBeast from './components/SelectedBeast/SelectedBeast';
import gallery from "./assets/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Header title="Gallery of Horns" beastGallery={gallery.length} />
      <Gallery list={gallery} />
      <Footer content="&copy; 2023 Xin Deng" />
      {/* <SelectedBeast /> */}
    </main>
  );
}

export default App;



import React from "react";
import HornedBeast from "../HornedBeasts/HornedBeasts.jsx";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Gallery(props) {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
        {props.list.map((hornedBeast, index) => (
          <Col key={index} style={{ margin: "15px" }}>
            <HornedBeast
              title={hornedBeast.title}
              _id={hornedBeast._id}
              imageUrl={hornedBeast.image_url}
              description={hornedBeast.description}
              keyword={hornedBeast.keyword}
              horns={hornedBeast.horns}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;


import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import SelectedBeast from "../SelectedBeast/SelectedBeast";

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleFavClick = () => {
    setFavorites(favorites + 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Col
      key={props._id}
      style={{ justifyContent: "center", gap: "20px", display: "flex" }}
    >
      <Card
        style={{
          width: "30rem",
          height: "40rem",
          justifyContent: "center",
          verticalAlign: "center",
          border: "solid black",
        }}
      >
        <Card.Img
          variant="top"
          src={props.imageUrl}
          alt={props.keyword}
          style={{
            height: "50%",
            width: "100%",
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={handleShowModal}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>❤️ Favorites: {favorites}</Card.Text>
          <Button onClick={handleFavClick} variant="primary">
            Vote for {props.title}
          </Button>
        </Card.Body>
      </Card>
      <SelectedBeast
        show={showModal}
        hide={handleCloseModal}
        clickBeast={props}
      />
    </Col>
  );
}

export default HornedBeast;


// Used Vertically center modal on react bootstrap site


import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SelectedBeast({ show, hide, clickBeast }) {
  return (
    <Modal show={show} onHide={hide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{clickBeast && clickBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={clickBeast && clickBeast.imageUrl}
          alt={clickBeast && clickBeast.title}
          style={{ width: "100%" }}
        />
        <p>{clickBeast && clickBeast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;



import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Person from './Person.jsx';

const People = (props) => {
  const [state, setState] = useState({
    name: 'The Cokos Clan',
    address: 'Lynnwood, Wa',
    family: props.list,
    displayFamily: props.list,
  });

  const changeAddress = () => {
    setState({ ...state, address: 'Wenatchee, WA' });
  };

  const handleFilter = (e) => {
    let age = e.target.value;
    let filteredFamily = state.family.filter((person) => person.age >= age);
    setState({ ...state, displayFamily: filteredFamily });
  };

  return (
    <>
      <h2>Meet {state.name} from {state.address}</h2>
      <div>
        <button onClick={changeAddress}>Change</button>
      </div>
      <Form>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="number"
          id="age"
          placeholder="Enter Age"
          onChange={handleFilter}
          aria-describedby="passwordHelpBlock"
        />
      </Form>

      <CardGroup>
        {state.displayFamily.map((person) => (
          <Person
            handleSelectPerson={props.handleSelectPerson}
            key={person._id}
            person={person}
          />
        ))}
      </CardGroup>
    </>
  );
};

export default People;
