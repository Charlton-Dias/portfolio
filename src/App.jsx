import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTab from './components/NavTab';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Container style={{ display: "flex", alignItems: 'flex-start' }} >
        <Sidebar />
        <NavTab />
      </Container>
    </>
  )
}

export default App
