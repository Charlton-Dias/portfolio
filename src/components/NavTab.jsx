import { Tab, Tabs } from "react-bootstrap";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { useState } from "react";
import { Box } from "@mui/material";

export default function NavTab() {
  const [activeTab, setActiveTab] = useState("About");
  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  return (
    <>
      <Box
        border={1}
        borderColor={"#ccc"}
        backgroundColor={'#1e1e1f'}
        marginLeft={1}
        width={'80%'}
        borderRadius={'10px'}
        alignItems={'center'}
        justifyContent={"center"}
      >
        <h1 className="tab-title-h1">{activeTab} </h1>
        <Tabs variant="" activeKey={activeTab} onSelect={handleTabSelect}>
          <Tab eventKey="About" title="About">
            <About />
          </Tab>
          <Tab eventKey="Resume" title="Resume">
            <Resume />
          </Tab>
          <Tab eventKey="Projects" title="Projects">
            <Projects />
          </Tab>
        </Tabs>
      </Box>
    </>
  )
}