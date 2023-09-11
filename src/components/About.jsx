import { Chip } from "@mui/material";

export default function About() {
  const skills = [
    'HTML',
    'CSS', 
    "javascript", 
    "react", 
    "nodejs", 
    "boltjs", 
    "c", 
    "git", 
    "sql", 
    "mongodb", 
    "bootstrap"
  ];

  return (
    <>
      <p>
        I am a software developer with a passion for building web applications. I'm currently pursuing my Masters of Computer Applications(MCA) in Goa University. I am always looking to learn new technologies and improve my skills. I am a team player and I enjoy working with others to achieve a common goal. I am a quick learner and I am always up for a challenge.
      </p>

      <h2>Skills and Tools</h2>
      {skills.map((skill) => {
        return (
          <Chip style={{ background: '#fed70e', color: '#000000', margin: 5, border: 1 }} label={skill} />
        )
      })}

    </>
  )
}


