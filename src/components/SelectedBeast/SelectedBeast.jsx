
// Used Vertically center modal on react bootstrap site

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedBeast(props) {
  return (
    <Modal show={props.show} 
    onHide={props.hide} 
    size="lg" aria-labelledby="contained-modal-title-vcenter" centered
    backdrop="static"  
    keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.clickBeast.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.clickBeast.image_url} alt={props.clickBeast.title} style={{ width: '100%' }} />
        <p>{props.clickBeast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;




