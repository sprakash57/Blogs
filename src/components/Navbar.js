import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/navbar.sass";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar light expand="md" className="background-blue sticky-top">
      <div className="container pr-3">
        <NavbarBrand href="/" style={{ fontWeight: "bold", color: "#eee" }}>
          KJSCE Codecell
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{
            justifyContent: "space-between",
          }}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" className="links">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="links">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" className="links">
                All Blogs
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
