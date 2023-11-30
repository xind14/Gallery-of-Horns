import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
// import SelectedBeast from './components/SelectedBeast/SelectedBeast';
import gallery from './assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

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





// import React, {useState} from 'react';

// import Header from './components/Header/Header.jsx';
// import Gallery from './components/Gallery/Gallery.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import SelectedBeast from './components/SelectedBeast/SelectedBeast.jsx';

// import gallery from './assets/data.json';

// import 'bootstrap/dist/css/bootstrap.min.css';


// function App(){

// const [clickBeast, setClickBeast]=useState(null);

// const [showModal, setShowModal]=useState(false);

// const handleShowModal=(hornedBeast)=>{
//   setClickBeast (hornedBeast);
//   setShowModal(true);
// };
// const handleCloseModal=()=>{
//   setShowModal(false);
// };
//   return(
//     <main>
//       <Header title="Gallery of Horns" beastGallery={gallery.length} />
//       <Gallery list ={gallery} onImageClick={handleShowModal}/>
//       <Footer content="&copy; 2023 Xin Deng"/>
//       <SelectedBeast 
//       show={showModal}
//       hide={handleCloseModal}
//       clickBeast={clickBeast}

//       />
//     </main>
//   );
// }

// export default App







// Map over the JSON data in your Gallery component to render each beast
// Send a function into your Gallery component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap
// When the user clicks on an individual image
// Then the image should render larger on the screen with the description displayed



//in class demo
// import { useState } from 'react'

// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import People from './components/People.jsx';

// import database from './assets/family.json';

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

// const [people, setPeople] = useState(database);

// function voteFor(person) {

//     console.log('People', people);

//     // Iterate the people array and find "person"
//     let newPeople = people.map( (obj, idx) => {
//     // Increase their vote count
//     if( obj.name === person ) {
//         obj.votes++;
//         return obj;
//     }
//     return obj;
//     });

//     console.log("newPeople", newPeople);

//     // Update State
//     setPeople(newPeople);

//     console.log(people);
// }

// return (
//     <main>
//     <Header title="Our Family!" members={people.length} />
//     <People list={people} handleVote={voteFor} />
//     <Footer content="Copyright 2023: John and the 301's" />
//     </main>
// )

// }

// export default App;
