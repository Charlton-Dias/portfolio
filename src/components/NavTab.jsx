import { Tab, Tabs } from "react-bootstrap";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

export default function NavTab() {
  return (
    <>
      <Tabs variant="pills">
        <Tab eventKey="about" title="About">
          <About />
        </Tab>
        <Tab eventKey="resume" title="Resume">
          <Resume />
        </Tab>
        <Tab eventKey="projects" title="Projects">
          <Projects />
        </Tab>
      </Tabs>
    </>
  )
}