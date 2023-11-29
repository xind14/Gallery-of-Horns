
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
<Row xs={true} md={true}>

        
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


        // <div className={styles.gallery}>
            
        //     <HornedBeast title= "UniWhal" imageUrl = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description = "A unicorn and a narwhal nuzzling their horns" keyword = "narwhal"/>

        //     <HornedBeast title= "Rhino Family"  imageUrl = "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description = "Parent rhino with two babies" keyword = "rhino"/>
        //     <HornedBeast title= "Unicorn Head"  imageUrl = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description = "Someone wearing a very silly unicorn head mask" keyword = "unicorn"/>
        // </div>
    );
}

export default Gallery;

// The Gallery component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

// import React from 'react';

// import Person from './Person.jsx';

// function People(props) {

//   return (
//     <>
//       {
//         props.list.map( (person,index) =>
//           <Person
//             key={index}
//             name={person.name}
//             hair={person.hair} />
//         )
//       }

//     </>
//   )

// }

// export default People;

