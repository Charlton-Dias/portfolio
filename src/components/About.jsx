import { Chip } from "@mui/material";

export default function About() {
  const skills = ['HTML', 'CSS', "javascript", "react", "nodejs", "c", "git", , "vscode", "linux", "windows", "sql", "mongodb", "heroku", "netlify", "bootstrap"];

  return (
    <>
      <h1>About</h1>
      {/* description here */}
      <p>
        I am a software developer with a passion for building web applications. I'm currently pursuing my Masters of Computer Applications(MCA) in Goa University. I am always looking to learn new technologies and improve my skills. I am a team player and I enjoy working with others to achieve a common goal. I am a quick learner and I am always up for a challenge.
      </p>

      {/* skills and interests here */}
      <h2>Skills and Tools</h2>
      {skills.map((skill, index) => {
        return (
          <Chip style={{ background: '#fed70e', color: '#000000', margin: 5, border: 1 }} label={skill} />
        )
      })}

    </>
  )
}


