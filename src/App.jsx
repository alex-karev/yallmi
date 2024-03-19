import { Container, Row, Col, Form, Card, Image, ListGroup, Button, Stack } from "react-bootstrap"

function App() {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col className="bg-body-tertiary shadow-border d-flex flex-column" xs={3} >
          <Container className="flex-grow-1 d-flex flex-column">
            <Row className="p-2">
              <h1 className="text-center">Yallmi</h1>
              <hr />
            </Row>
            <Row className="flex-grow-1">
              <ListGroup className="p-2">
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action active>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Row>
            <Row className="p-2">
              <Stack direction="vertical" gap={2}>
                <Button variant="primary">Settings</Button>
                <Button variant="primary">About</Button>
              </Stack>
            </Row>
          </Container>
        </Col>
        <Col className="d-flex flex-column">
          <Row className="bg-body-tertiary shadow-border p-2 d-flex justify-content-between">
            <Col>
              <span>Navbar - Left</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>Navbar - Right</span>
            </Col>
          </Row>
          <Row className="flex-grow-1">
            <Container>
              <Row className="p-2 d-flex align-items-center">
                <Col>
                  <Card>
                    <Card.Body>Question...</Card.Body>
                  </Card>
                </Col>
                <Col xs="auto">
                  <Image src="logo.svg" roundedCircle style={{ width: "50px" }} />
                </Col>
              </Row>
              <Row className="p-2 d-flex align-items-center">
                <Col xs="auto">
                  <Image src="logo.svg" roundedCircle style={{ width: "50px" }} />
                </Col>
                <Col>
                  <Card border="light">
                    <Card.Body>Answer...</Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="p-3 d-flex align-items-center">
            <Col>
              <Form.Control type="text" as="textarea" placeholder="Type your question..." rows={5}></Form.Control>
            </Col>
            <Col xs="auto">
              <Button variant="primary">Send</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bg-body-tertiary shadow-border p-2 d-flex justify-content-between">
        <Col>
          <span>Command Line - Left</span>
        </Col>
        <Col className="d-flex justify-content-end">
          <span>Command Line - Right</span>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
