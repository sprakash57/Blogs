import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { Link } from "gatsby";
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
            <NavItem className="mr-3">
              <Link to="/" className="links">
                Home
              </Link>
            </NavItem>
            <NavItem className="mr-3">
              <Link to="/about" className="links">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog" className="links">
                All Blogs
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
