import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light border border-warning" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house-fill "> Home</i>    
          </Link>
          <div style={{marginRight:"2rem", }}>
            <a href="https://github.com/aariffulalam" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-github "  style={{marginRight:"1rem"}}>GitHub</i>
            </a>
            <a href="https://www.linkedin.com/in/aariffulalam/" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-linkedin" style={{marginRight:"1rem"}}>LinkedIn</i>
            </a>
            <a href="https://twitter.com/Aariffulalam" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-twitter" style={{marginRight:"1rem"}}>Twitter</i>
            </a>
            <a href="https://leetcode.com/aariffulalam/" style={{color:"black", textDecoration:"none"}}>Leetcode</a>  
          </div>
        </div>
      </nav>
  )
}

export default Navbar