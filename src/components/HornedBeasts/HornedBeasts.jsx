import React, {useState} from "react";

function HornedBeast(props){

const [favorites, setFavorites]=useState(0);

const handleClick = ()=>{
    setFavorites(favorites +1);
}


    return(
        <>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt={props.keyword}/>
            <p>{props.description}</p>
            <button onClick={handleClick}></button>
            ❤️ Favorites: {favorites}
        </>

    )
}

export default HornedBeast;

// "_id": 1,
// "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// "title": "UniWhal",
// "description": "A unicorn and a narwhal nuzzling their horns",
// "keyword": "narwhal",
// "horns": 1

// Given that a user opens the application in the browser
// When a user clicks on an image of a beast
// Then the number of "Favorites" displayed on that beast will increase by one.

// Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

// Put a heart in each HornedBeast component with the number of “Favorites” next to it.


// key={index}

// import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Person( props ) {

//   const [color, setColor] = useState("grey");
//   const [visible, setVisible] = useState("block");

//   function vote() {
//      setVisible("none");
//   }

//   return (
//     <Card style={{ width: '18rem', margin:"1em", display: `${visible}` }}>
//       <Card.Img variant="top" src="https://placehold.co/100x100" />
//       <Card.Body>
//         <Card.Title>{props.name}</Card.Title>
//         <Card.Text>
//           Hair Color: {props.hair}
//         </Card.Text>
//         <Button onClick={vote} variant="primary">Vote for {props.name}</Button>
//       </Card.Body>
//     </Card>
//   );

// }

// export default Person;