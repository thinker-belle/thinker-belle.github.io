import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "./brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasicons from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./custom.css";

function PageSidebar () {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

    return (
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        className="navmenu bg-dark text-white"
      >
        <Offcanvas.Header className="text-white" closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <img src={logo} className="App-logo" alt="logo" height="50px" />
            Korbel Foundation College, Inc.
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          <Nav className="nav-pills flex column mb-auto" >
            <Nav.Item>
              <Link to="/" className="nav nav-link text-white" show={show}  onClick={handleClose}>
                <FontAwesomeIcon icon={fasicons.faHome} className="ms-3 me-3" />
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/generalssettings" className="nav nav-link text-white">
                <FontAwesomeIcon icon={fasicons.faCogs} className="ms-3 me-3" />
                General Settings
                {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
              </Link>
            </Nav.Item>

            <hr />

            <Nav.Item>
              <Link to="/leaveapplication" className="nav nav-link text-white">
                <FontAwesomeIcon
                  icon={fasicons.faEnvelopeOpen}
                  className="ms-3 me-3"
                />
                File a Leave
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/leavecredits" className="nav nav-link text-white">
                <FontAwesomeIcon
                  icon={fasicons.faFolderOpen}
                  className="ms-3 me-3"
                />
                View Leave Credits
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/leaveposting" className="nav nav-link text-white">
              <FontAwesomeIcon
                  icon={fasicons.faTasks}
                  className="ms-3 me-3"
                />
                Post Leave Requests
              </Link>
            </Nav.Item>

          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    );
  }
export default PageSidebar;

