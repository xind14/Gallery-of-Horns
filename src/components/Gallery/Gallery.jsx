
import React from "react";
import HornedBeast from "../HornedBeasts/HornedBeasts.jsx";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// import styles from './gallery.module.css'

function Gallery(props){
    return (

// people = gallery = JSON
// title=header 
// members=beastGallery
// list = gallery JSON
// content =footer
// map(person, index = current value, index)
<Container>
<Row md={2}>

        
        {
            props.list.map((hornedBeast, index)=>
            <HornedBeast 
            key={index}
            title={hornedBeast.title}
            _id={hornedBeast._id}
            imageUrl={hornedBeast.image_url}
            description={hornedBeast.description}
            keyword={hornedBeast.keyword}
            horns={hornedBeast.horns}

            />
            )
        }
           </Row>
    </Container>


    );
}

export default Gallery;
