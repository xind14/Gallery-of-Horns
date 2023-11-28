import React from "react";

//comment out?
import styles from './header.module.css' 



function Header(props){
    return (
        // <header className={styles.hdr}>
        <header>

            <h1>{props.title}</h1>     
            <div> We have {props.beastArray} to look through</div>
        </header>
    )
}


export default Header;



// function Header(props) {

//     return (
//       <header>
//         <h1>{props.title}</h1>
//         <div>We have {props.members} family members for you to meet</div>
//       </header>
//     )
  
//   }
  
//   export default Header;