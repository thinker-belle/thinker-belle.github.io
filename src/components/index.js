import React from "react";
import PageNavbar from "./navbar";
import PageContents from "../pages/index"
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

class PageFramework extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <PageNavbar />
          <Container>
            <PageContents />
          </Container>
        </BrowserRouter>
      </>
    );
  }
}

export default PageFramework;
