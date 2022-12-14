import React from "react";
import { Link } from "react-router-dom"

const Header = () => {

// add avatar, dark/light toggle, Settings, and Calendar?--sb


    return (
        <nav>
        <ol> 
        <Link to="/" type="button" style={{ marginRight: 10 }}>Home</Link>   
        <Link to="/mainList" type="button" style={{ marginRight: 10 }}>Today's List</Link> 
        <Link to="/favorites" type="button" style={{ marginRight: 10 }}>Favorites</Link> 
        <Link to="/CreateNewTab" type="button" style={{marginRight: 10 }}>Create New List</Link>
        </ol>           
      </nav>
    );
  };
  
  export default Header;