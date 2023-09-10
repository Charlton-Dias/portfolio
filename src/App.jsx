import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTab from './components/NavTab';
import Sidebar from './components/Sidebar';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <Container
        style={{ display: !isMobile ? "flex" : 'grid', alignItems: 'flex-start' }}
      >
        <Sidebar />
        <NavTab />
      </Container>
    </>
  )
}

export default App
