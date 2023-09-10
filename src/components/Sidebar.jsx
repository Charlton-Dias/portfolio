import { Avatar, Box, CardHeader, Chip, Link, useMediaQuery, Button } from "@mui/material";
import { Col, Container } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

export default function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {isMobile ? <SidebarCard mobile /> :
        <StickyBox offsetTop={20} offsetBottom={20} >
          <SidebarCard />
        </StickyBox>}
    </>
  )
}

function SidebarCard({ mobile }) {
  const [expanded, setExpanded] = useState(!mobile);
  return (
    <>
      <Box
        width={mobile ? '100%' : '300px'}
        border={1}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={'10px'}
        padding={2}
        alignItems={'center'}
        justifyContent={"center"}
        borderColor={"#ccc"}
        backgroundColor={'#1e1e1f'}
        marginBottom={mobile ? 2 : 0}
      >
        <Avatar alt='Display picture' style={{ height: mobile ? '100%' : '150px', width: mobile ? '100%' : '150px', borderRadius: '15px' }} src="./src/avatar.jpeg" />
        <CardHeader title='Charlton Dias' style={{ color: 'white' }} />

        <Chip variant="outlined" label="Software Developer" style={{ color: 'white' }} />
        <hr />

        {mobile && <Button variant="contained" onClick={() => setExpanded(!expanded)} style={{ marginBottom: '10px' }} >{expanded ? 'Hide' : 'Show'} Contact Info</Button>}

        {expanded &&
          <Container style={{ display: 'flex', textAlign: 'left', flexDirection: 'column', color: 'white' }}  >
            <Col style={{ flex: 1, marginBottom: '10px' }}>
              <AiFillGithub size={24} />
              <Link underline="none" color='none' href="https://github.com/Charlton-Dias"> github.com/Charlton-Dias</Link>
            </Col>

            <Col style={{ marginBottom: '10px' }}>
              <AiFillLinkedin size={24} />
              <Link underline="none" color='none' href="https://in.linkedin.com/in/charlton-dias"> linkedin.com/in/charlton-dias</Link>
            </Col>

            <Col style={{ marginBottom: '10px', alignItems: 'flex-start' }}>
              <AiOutlineMail size={24} />
              <Link underline="none" color='none' href="mailto:charltondias29@gmail.com"> charltondias29@gmail.com</Link>
            </Col>
            <Col style={{ marginBottom: '10px' }}>
              <BiCurrentLocation size={24} />
              <> Margao, Goa, India</>
            </Col>
          </Container>
        }
      </Box>
    </>
  )
}