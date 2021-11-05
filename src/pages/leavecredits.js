import React, { useState } from "react";
import {
  FormControl,
  Col,
  Row,
  Table,
  Button,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasicons from "@fortawesome/free-solid-svg-icons";

function LeaveCredits() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mb-3">
        <Col className="col-lg-4">
          <FormControl
            type="search"
            placeholder="Search"
            className=""
            aria-label="Search"
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShow}>
            <FontAwesomeIcon icon={fasicons.faPlus} className="me-1" />
            Add Leave Credits
          </Button>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Leave Credits Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LeaveCredits;
