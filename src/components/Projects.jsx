import { Button, ButtonGroup, Card } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <Card style={{ height: '400px', width: '250px' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            This is a description of project 1
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <ButtonGroup style={{ width: '100%' }}>
            <Button variant="dark">Demo</Button>
            <Button variant="outline-dark">Source</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>

    </>
  )
}