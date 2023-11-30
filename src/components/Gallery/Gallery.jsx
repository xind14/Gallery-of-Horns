
import React from "react";
import HornedBeast from "../HornedBeasts/HornedBeasts.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
          />
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;










// import React from "react";
// import HornedBeast from "../HornedBeasts/HornedBeasts.jsx";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

// import styles from './gallery.module.css'


// Send a function into your Gallery component that allows the user to update state in the App





// function Gallery(props) {
//   return (
//     <Container>
//       <Row xs={1} sm={2} md={3} lg={4}>
//         {props.list.map((hornedBeast, index) => (
//           <HornedBeast
//             key={index}
//             title={hornedBeast.title}
//             _id={hornedBeast._id}
//             imageUrl={hornedBeast.image_url}
//             description={hornedBeast.description}
//             keyword={hornedBeast.keyword}
//             horns={hornedBeast.horns}
//             userClick={() => props.onImageClick(hornedBeast)}
//           />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Gallery;


//class demo
// import React from 'react';

// import Person from './Person.jsx';

// function People(props) {

// return (
//     <>
//     {
//         props.list.map( (person,index) =>
//         <Person
//             key={index}
//             name={person.name}
//             hair={person.hair}
//             votes={person.votes}
//             handleVote={props.handleVote}
//         />
//         )
//     }

//     </>
// )

// }

// export default People;
