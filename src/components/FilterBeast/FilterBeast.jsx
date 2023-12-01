import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FilterBeast(props) {
  const handleFilterHorns = (event) => {
    event.preventDefault();
    props.onFilterHorns(event.target.value);
  };

  return (
    <Form onSubmit={handleFilterHorns}>
  <Row className="mb-3 justify-content-center">     
     <Form.Group as={Col} sm={6} md={4}  controlId="formGridHorns">
          <Form.Label>Filter by Horns:</Form.Label>
          <Form.Select defaultValue="All" onChange={handleFilterHorns}>
            <option value="All">All</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
          </Form.Select>
        </Form.Group>
      </Row>

    </Form>
  );
}

export default FilterBeast;

