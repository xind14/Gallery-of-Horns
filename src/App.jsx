import React, {useState} from 'react';

import beasts from './assets/data.json';


import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App(){

  return(
    <main>
      <Header title="Gallery of Horns" beastArray={beasts.length} />
      <Gallery list ={beasts}/>
      <Footer content="&copy; 2023 Xin Deng"/>
    </main>
  )
}

export default App


// function App() {

//   return (
//     <main>
//       <Header title="Our Family!" members={people.length} />
//       <People list={people} />
//       <Footer content="Copyright 2023: John and the 301's" />
//     </main>
//   )

// }

// export default App;