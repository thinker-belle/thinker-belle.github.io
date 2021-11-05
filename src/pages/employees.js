import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasicons from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Button,
  FormControl,
  Table,
  Col,
  Row,
  Form,
} from "react-bootstrap";

function Employees() {
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
            Add Employee
          </Button>
        </Col>
      </Row>

      <Col className="col-12">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group className="col-12 mb-3" controlId="formIDNumber">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formFirstName"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formMiddleName"
              >
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formLastName"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formSuffix"
              >
                <Form.Label>Suffix</Form.Label>
                <Form.Select>
                  <option>- Select -</option>
                  <option>Jr</option>
                  <option>Sr</option>
                  <option>III</option>
                  <option>IV</option>
                  <option>V</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formApprovalStage"
              >
                <Form.Label>Department</Form.Label>
                <Form.Select>
                  <option>- Select -</option>
                  <option>Human Resource</option>
                  <option>Finance</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formEmpType"
              >
                <Form.Label>Employee Type</Form.Label>
                <Form.Select>
                  <option>- Select -</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formPersonType"
              >
                <Form.Label>Personnel Type</Form.Label>
                <Form.Select>
                  <option>- Select -</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formApprovalStage"
              >
                <Form.Label>Approval Stage</Form.Label>
                <Form.Select>
                  <option>- Select -</option>
                  <option>Human Resource</option>
                  <option>Finance</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="col-lg-6 col-sm-6 mb-3"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Row>
          </Form>
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

export default Employees;
