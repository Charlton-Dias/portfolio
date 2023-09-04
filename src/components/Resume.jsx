import {education} from '../data/education.json';

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <h2>Education</h2>
      
      {education.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item?.institution}</h3>
            <p>{item?.description}</p>
            <p>{item?.studyType}</p>
            <p>{item?.startDate} - {item?.endDate}</p>
          </div>
        )
      })}
    </>
  )
}