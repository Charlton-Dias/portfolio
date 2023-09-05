import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import StickyBox from "react-sticky-box";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTab from './components/NavTab';

function App() {

  return (
    <>
      <Container fluid>

        <StickyBox offsetTop={20} offsetBottom={20} >
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <div className="header">
            </div>
          </Col>

          <Col md="auto">

          </Col>
        </Row>



        </StickyBox>
        <Container >
          <NavTab />
        </Container>



      </Container>
    </>
  )
}

export default App
