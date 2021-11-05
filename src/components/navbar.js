import React from "react";
import { Link } from "react-router-dom";
// import PageSidebar from "./sidebar";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasicons from "@fortawesome/free-solid-svg-icons";

class PageNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="black" variant="dark" className="pt-0 pb-0" expand={false} >
          <Container>
            <Nav className="me-auto ms-2">
              <Link to="/" className="navbar-brand">
                Assentrix HR LRQMS
              </Link>
            </Nav>
            <Navbar>
              <Nav>
                <NavDropdown
                  title="Admin"
                  id="collasible-nav-dropdown"
                  align="end">
                  <NavDropdown.Item>
                    <Link to="/profile" className="dropdown-item">
                      <FontAwesomeIcon
                        icon={fasicons.faUser}
                        className="me-3"
                      />
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/" className="dropdown-item">
                      <FontAwesomeIcon
                        icon={fasicons.faTachometerAlt}
                        className="me-3"
                      />
                      Dashboard
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/logout" className="dropdown-item">
                      <FontAwesomeIcon
                        icon={fasicons.faSignOutAlt}
                        className="me-3"
                      />
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar>
          </Container>
          {/* <PageSidebar /> */}
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" className="" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faHome}
                    className="me-1"
                  />
                  Dashboard
                </Link>
                <Link to="/leaveapplication" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faEnvelopeOpen}
                    className="me-1"
                  />
                  Leave Application
                </Link>
                <Link to="/leavecredits" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faFolderOpen}
                    className="me-1"
                  />
                  View Leave Credits
                </Link>
                <Link to="/employees" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faUsers}
                    className="me-1"
                  />
                  Employees
                </Link>
                <Link to="/generalssettings" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faCogs}
                    className="me-1"
                  />
                  General Settings
                </Link>
               
                <Link to="/leaveposting" className="nav nav-link">
                  <FontAwesomeIcon
                    icon={fasicons.faTasks}
                    className="me-1"
                  />
                  Post Leave Requests
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default PageNavbar;
