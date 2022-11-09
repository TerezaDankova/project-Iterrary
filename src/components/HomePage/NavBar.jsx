import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"
import { useState } from "react";
import "./NavBar.css";
import {IconContext} from 'react-icons'
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";


function NavBar (){
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   const location = useLocation(); 
   console.log("LOCATION pathname", location.pathname);

   return(

      <div className="navbarImage">
      <IconContext.Provider value={{color: 'black'}}>
        <Navbar className='navbar' expand="lg">
        <Container>
        <Nav className="me-auto">
        <Navbar.Brand className="ml-2" href="#home">I T E R R A R Y</Navbar.Brand>
        </Nav>
        <Nav>
        <Link href="#" className="menu-bar">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        </Nav>
        </Container>
        </Navbar>
      <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <Nav.Link className="nav-menu-items" onClick={showSidebar} >
          <Nav.Link className="nav-toggle">
            <Link href="#" className="menu-bar-two mr-2">
              <AiIcons.AiOutlineClose size={20} style={{color: 'white'}} />
            </Link>
          </Nav.Link>
          <Nav.Link>
              <Link to="/"
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
              > HOME </Link>
              <Link to="/itineraries"
                    className={location.pathname === "/itineraries" ? "nav-link active" : "nav-link"}
              > ITINERARIES </Link>
               <Link to="/tripAdvisor"
                    className={location.pathname === "/tripAdvisor" ? "nav-link active" : "nav-link"}
              > RESTAURANTS</Link>
          </Nav.Link>
        </Nav.Link>
      </Nav>
      </IconContext.Provider>
      </div>
   )
}
export default NavBar
