import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasicons from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Form,
  Container,
  FormControl,
  Button,
  Accordion,
  Col,
  Row,
  Table,
} from "react-bootstrap";

function GenSet() {
  const doctitle = {
    emptype: "Employee Type",
    pertype: "Personnel Type",
    dept: "Department",
    appstage: "Approval Stage",
  };
  return (
    <>
      <GeneralSettings emptype={doctitle.emptype} pertype={doctitle.emptype} dept={doctitle.dept} />
    </>
  );
}

function GeneralSettings(props) {
  const [emptypeshow, setShowEmpType] = useState(false);
  const handleEmpTypeClose = () => setShowEmpType(false);
  const handleEmpTypeShow = () => setShowEmpType(true);

  const [pertypeshow, setShowPerType] = useState(false);
  const handlePerTypeClose = () => setShowPerType(false);
  const handlePerTypeShow = () => setShowPerType(true);

  const [deptshow, setShowDept] = useState(false);
  const handleDeptClose = () => setShowDept(false);
  const handleDeptShow = () => setShowDept(true);

  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="col-lg-6 col-12 mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.emptype}</Accordion.Header>
              <Accordion.Body>
                <Row className="mb-3">
                  <Col>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="primary" onClick={handleEmpTypeShow}>
                      <FontAwesomeIcon
                        icon={fasicons.faPlus}
                        className="me-1"
                      />
                      Add New
                    </Button>
                  </Col>
                </Row>
                <Table responsive striped bordered hover className="m-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col className="col-lg-6 col-12 mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Personnel Type</Accordion.Header>

              <Accordion.Body>
                <Row className="mb-3">
                  <Col>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="primary" onClick={handlePerTypeShow}>
                      <FontAwesomeIcon
                        icon={fasicons.faPlus}
                        className="me-1"
                      />
                      Add New
                    </Button>
                  </Col>
                </Row>
                <Table responsive striped bordered hover className="m-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col className="col-lg-6 col-12 mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Department</Accordion.Header>
              <Accordion.Body>
                <Row className="mb-3">
                  <Col>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="primary" onClick={handleDeptShow}>
                      <FontAwesomeIcon
                        icon={fasicons.faPlus}
                        className="me-1"
                      />
                      Add New
                    </Button>
                  </Col>
                </Row>
                <Table responsive striped bordered hover className="m-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col className="col-lg-6 col-12 mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Approval Stage</Accordion.Header>

              <Accordion.Body>
                <Row className="mb-3">
                  <Col>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="primary">
                      <FontAwesomeIcon
                        icon={fasicons.faPlus}
                        className="me-1"
                      />
                      Add New
                    </Button>
                  </Col>
                </Row>
                <Table responsive striped bordered hover className="m-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Modal
        show={emptypeshow}
        onHide={handleEmpTypeClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add {props.emptype}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group className="col-12 mb-3" controlId="formIDNumber">
                <Form.Label>{props.emptype}</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEmpTypeClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={pertypeshow}
        onHide={handlePerTypeClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add {props.pertype}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group className="col-12 mb-3" controlId="formIDNumber">
                <Form.Label>{props.pertype}</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePerTypeClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={deptshow}
        onHide={handleDeptClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add {props.dept}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group className="col-12 mb-3" controlId="formIDNumber">
                <Form.Label>{props.dept}</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeptClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// ReactDOM.render(<GenSet/>)

export default GenSet;
