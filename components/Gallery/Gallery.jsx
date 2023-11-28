needs to render at least two copies of a component called HornedBeast.

The Gallery component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.

import React from 'react';
import Person from '../Person/Person.jsx';
import styles from "./family.module.css";
import logo from "../../assets/react.svg";

function Family() {
  return (
    <div className={styles.family}>
      <ul>
        <Person name="John" age="55" />
        <Person name="Cathy" age="NaN" />
        <Person name="Allie" age="18" />
        <Person name="Zach" age="25" />
      </ul>

      <img src={logo} />
    </div>
  )
}

export default Family;