The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

import React from 'react';

// "attributes" come in as "props"
// So ... <Person name="Fred" age="23" />
function Person(props) {

  return (
    <li>
      {props.name} is {props.age} years old.
    </li>
  )

}

export default Person;