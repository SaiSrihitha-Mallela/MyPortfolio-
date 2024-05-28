import React from "react";
import './css/Header.css';
const Header = () => {
    return ( 
        <>
        
        
        <div className="home">
            <nav className="navbar navbar-expand-lg navbar-light text-justify-center text-danger">
                <p className="name">
                   Mallela <normal>SAI SRIHITHA</normal>
                </p>

                <div className="collapse navbar-collapse  justify-content-center  " id="navbarNavAltMarkup">
                   <div className="navbar-nav">
                      <a className="nav-item nav-link text-white" href="#">Home <span className="sr-only"></span></a>
                      <a className="nav-item nav-link text-white " href="#">About</a>
                      <a className="nav-item nav-link text-white" href="#">Services</a>
                      <a className="nav-item nav-link text-white" href="#">My Skills</a>
                      <a className="nav-item nav-link text-white" href="#">My Work</a>
                      <a className="nav-item nav-link text-white" href="#">Contact Me</a>



                      
                   </div>
                </div>
            </nav>

          

               
                

        </div>
        </>
        
        
     );
}
 
export default Header;