import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"
import { useState } from "react";
import {SideBar} from "./SideBar";
import "./NavBar.css";
import {IconContext} from 'react-icons'
import { Container, Nav, Navbar } from "react-bootstrap";


function NavBar (){
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   return(

      <>
      <IconContext.Provider value={{color: 'black'}}>
        <Navbar className='navbar' expand="lg">
        <Container>
        <Nav className="me-auto">
        <Navbar.Brand href="#home">I T E R R A R Y</Navbar.Brand>
        </Nav>
        <Nav>
        <Link to="#" className="menu-bar">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        </Nav>
      <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <Nav.Link className="nav-menu-items" onClick={showSidebar} >
          <Nav.Link className="nav-toggle">
            <Link to="#" className="menu-bar-two">
              <AiIcons.AiOutlineClose />
            </Link>
          </Nav.Link>
          {SideBar.map((item, index) => {
            return (
              <Nav.Link key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </Nav.Link>
            )
          })}
        </Nav.Link>
      </Nav>
      </Container>
        </Navbar>
      </IconContext.Provider>
      </>
   )
}
export default NavBar
