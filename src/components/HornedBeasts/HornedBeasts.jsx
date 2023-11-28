import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeast(props){

const [favorites, setFavorites]=useState(0);

const handleClick = ()=>{
    setFavorites(favorites +1);
}


    return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} alt={props.keyword} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Card.Text>
        ❤️ Favorites: {favorites}
        </Card.Text>
        <Button  onClick={handleClick} variant="primary">Vote for {props.title}</Button>

      </Card.Body>
    </Card>



        // <>
        //     <h2>{props.title}</h2>
        //     <img src={props.imageUrl} alt={props.keyword}/>
        //     <p>{props.description}</p>
        //     <button onClick={handleClick}></button>
        //     ❤️ Favorites: {favorites}
        // </>

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
// When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
// Then the information and styles should change.
// When the user clicks on elements such as the header, footer or title of page, make something change using state.
// You can update the words, change the styles or add something new. Be creative.


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

