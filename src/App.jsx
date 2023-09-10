import { Container } from 'react-bootstrap';
import './App.css'
import StickyBox from "react-sticky-box";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTab from './components/NavTab';
import { Avatar, Box, CardHeader, Chip, Divider } from '@mui/material';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Container style={{ display: "flex", alignItems: 'flex-start' }} >
        <Sidebar />

        <Box
          border={1}
          borderColor={"#101010"}
          backgroundColor={'#1e1e1f'}
          marginLeft={1}
          width={'80%'}
          borderRadius={'10px'}
          padding={2}
          alignItems={'center'}
          justifyContent={"center"}
        >

          <NavTab />
        </Box>
      </Container>
    </>
  )
}

export default App
