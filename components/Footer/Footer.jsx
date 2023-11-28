Your Footer component needs to contain your name as the author.

import React from 'react';

import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.foot}>
      &copy; 2023 John and the 301d11 Class
    </footer>
  )
}

export default Footer;