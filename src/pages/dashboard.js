import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as fasicons from "@fortawesome/free-solid-svg-icons";

class Dashboard extends React.Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Row>
          <Col className="col-lg-3 col-6">
            <Card bg="primary" text="light" className="mb-2">
              <Card.Body className="text-center">
                <Card.Title>12 </Card.Title>
                <Card.Text>Employees</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-3 col-6">
            <Card bg="success" text="light" className="mb-2">
              <Card.Body className="text-center">
                <Card.Title>5</Card.Title>
                <Card.Text>Pending Requests</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-3 col-6">
            <Card bg="dark" text="light" className="mb-2">
              <Card.Body className="text-center">
                <Card.Title>1</Card.Title>
                <Card.Text>Pending for Approval</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-3 col-6">
            <Card bg="danger" text="light" className="mb-2">
              <Card.Body className="text-center">
                <Card.Title>3</Card.Title>
                <Card.Text>Rejected</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
