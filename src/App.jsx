import React, {useState} from 'react';

import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import SelectedBeast from './components/SelectedBeast/SelectedBeast.jsx';
import FilterBeast from './components/FilterBeast/FilterBeast.jsx';


import gallery from './assets/data.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
const [clickBeast, setClickBeast]=useState({});

const [showModal, setShowModal]=useState(false);
const [filterHorns, setFilterHorns] = useState('All');
  const [galleryData, setGalleryData] = useState(gallery);

const handleShowModal=(hornedBeast)=>{
  setClickBeast (hornedBeast);
  setShowModal(true);
};
const handleCloseModal=()=>{
  setShowModal(false);
};

// Used chatGPT for this, could not figure out how to use ? and : shown in class today
const handleFilterHorns = (value) => {
  // console.log('Filtering by Horns:', value);
  setFilterHorns(value);
  const filteredData = value === 'All'
  ? gallery
  : gallery.filter(hornedBeast => hornedBeast.horns ===parseInt(value) );
  console.log('Filtered Data:', filteredData);
  // console.log('Updated Gallery Data:', filteredData);
setGalleryData([...filteredData]);
};


  return(
    <main>
      <Header title="Gallery of Horns" beastGallery={gallery.length} />
      <FilterBeast onFilterHorns={handleFilterHorns} />

      <Gallery list ={galleryData} onImageClick={handleShowModal}/>
      <Footer content="&copy; 2023 Xin Deng"/>
      <SelectedBeast
      show={showModal}
      hide={handleCloseModal}
      clickBeast={clickBeast}

      />
    </main>
  );
}

export default App



