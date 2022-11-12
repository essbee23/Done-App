import React from "react";
import { Link } from "react-router-dom"

const Header = () => {

// add avatar, dark/light toggle, Settings, and Calendar?--sb


    return (
        <nav>
        <ol> 
        <Link to="/" type="button" style={{ marginRight: 10 }}>Home</Link> 
        <Link to="/favorites" type="button" style={{ marginRight: 10 }}>Favorites</Link> 
        <Link to="/CreateNewTab" type="button" style={{marginRight: 10 }}>Create New Tab</Link>
        </ol>           
      </nav>
    );
  };
  
  export default Header;