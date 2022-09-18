import React from "react";

//creating a dynamic year
const currentYear = new Date().getFullYear();

function Footer(){
    return(
    <footer>
        <p>Copyright © {currentYear}</p>
   </footer>
    );

    
}

export default Footer;