import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/navbar.sass";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // WAIT WAIT. LEMME TRY ADDING THE ml-auto class again
  return (
    <div>
      <Navbar
        light
        expand="md"
        className="background-blue"
      >
        <NavbarBrand href="/" style={{fontWeight: "bold"}}>KJSCE Codecell</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{
            justifyContent:"space-between"
          }}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className="links">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about"className="links">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog"className="links">All Blogs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
