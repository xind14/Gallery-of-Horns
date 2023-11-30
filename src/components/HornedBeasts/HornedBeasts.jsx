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
    <Col key={props._id} style={{ marginBottom: '15px', justifyContent: 'center' }}>
      <Card
        style={{
          width: '30rem',
          height: '25rem',
          justifyContent: 'center',
          verticalAlign: 'center',
          border: 'solid black',
        }}
      >
        <Card.Img
          variant="top"
          src={props.imageUrl}
          alt={props.keyword}
          style={{ height: '50%', width: '100%', objectFit: 'contain', cursor: 'pointer' }}
          onClick={handleShowModal}
          
        />
        <Card.Body style={{ textAlign: 'center' }}>
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










// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";

// function HornedBeast(props) {
//   const [favorites, setFavorites] = useState(0);

//   const handleClick = () => {
//     setFavorites(favorites + 1);
//   };



//   return (
    
//       <Col
//         key={props._id}
//         style={{ marginBottom: "15px", justifyContent: "center" }}
//       >
//         <Card
//           style={{
//             width: "30rem",
//             height: "25rem",
//             justifyContent: "center",
//             verticalAlign: "center",
//             border: "solid black",
//           }}
//         >
//           <Card.Img
//             variant="top"
//             src={props.imageUrl}
//             alt={props.keyword}
//             style={{ height: "50%", width: "100%", objectFit: "contain" }}
//           />
//           <Card.Body style={{ textAlign: "center" }}>
//             <Card.Title>{props.title}</Card.Title>
//             <Card.Text>{props.description}</Card.Text>
//             <Card.Text>❤️ Favorites: {favorites}</Card.Text>
//             <Button onClick={handleClick} variant="primary">
//               Vote for {props.title}
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>

  
//   );
// }

// export default HornedBeast;




//class demo
// import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Person( props ) {

// function vote() {
//     // Call a method in the parent that does the voting...
//     props.handleVote(props.name);
// }

// return (
//     <Card style={{ width: '18rem', margin:"1em"}}>
//     <Card.Img variant="top" src="https://placehold.co/100x100" />
//     <Card.Body>
//         <Card.Title>{props.name}</Card.Title>
//         <Card.Text>
//         Votes: {props.votes}
//         </Card.Text>
//         <Button onClick={vote} variant="primary">Vote for {props.name}</Button>
//     </Card.Body>
//     </Card>
// );

// }

// export default Person;

// "_id": 1,
// "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// "title": "UniWhal",
// "description": "A unicorn and a narwhal nuzzling their horns",
// "keyword": "narwhal",
// "horns": 1
