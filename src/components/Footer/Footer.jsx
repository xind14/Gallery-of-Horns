
import React from "react";
import styles from './footer.module.css'

function Footer(props){
    return (
        // <footer className= {styles.foot}> &copy; 2023 Xin Deng</footer>
        <footer> {props.content}</footer>

    )
}

export default Footer



// import React from 'react';

// function footer(props) {

//   return (
//     <footer>
//       <div>
//         {props.content}
//       </div>
//     </footer>
//   )

// }

// export default footer;