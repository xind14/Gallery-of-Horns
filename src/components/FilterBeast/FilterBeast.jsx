import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FilterBeast(props) {
  const handleFilterChange = (event) => {
    // Call a function in the parent component (e.g., App) to handle the filter change
    props.onFilterChange(event.target.value);
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHorns">
          <Form.Label>Filter by Horns:</Form.Label>
          <Form.Select defaultValue="All" onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            {/* Add more options based on your data */}
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Apply Filter
      </Button>
    </Form>
  );
}

export default FilterBeast;

