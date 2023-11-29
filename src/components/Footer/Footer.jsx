
import React from "react";
import styles from './footer.module.css';

function Footer(props){
    return (
        // <footer className= {styles.foot}> &copy; 2023 Xin Deng</footer>
        <footer> {props.content}</footer>

    )
}

export default Footer

