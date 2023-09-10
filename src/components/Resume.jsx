import { Card } from 'react-bootstrap';
import { education } from '../data/education.json';
import { work } from '../data/work.json';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot
} from '@mui/lab';

export default function Resume() {
  return (
    <>
      <h2>Work Experience</h2>
      <Timeline position="left">
        {work.map((item) => {
          return (
            <>
              <TimelineItemCard item={item} work={true} />
            </>
          )
        })}
      </Timeline>

      <h2>Education</h2>
      <Timeline position="right">
        {education.map((item) => {
          return (
            <>
              <TimelineItemCard item={item} work={false} />
            </>
          )
        })}
      </Timeline>
    </>
  )
}

function TimelineItemCard({ item, work }) {
  return (
    <>
      <TimelineItem style={{ margin: 2 }} >
        <Card>
          <Card.Header>
            <Card.Title>{item?.description}</Card.Title>
          </Card.Header>

          <Card.Body >
            <Card.Text style={{ color: 'black' }} >{item?.institution}</Card.Text>
            <Card.Subtitle className='text-muted' style={{ color: 'black' }}>{item?.startDate} - {item?.endDate}</Card.Subtitle>
          </Card.Body>
          {item?.studyType &&
            <Card.Footer>
              <Card.Text style={{ color: 'black' }}>{item?.studyType}</Card.Text>
            </Card.Footer>
          }
        </Card>

        <TimelineSeparator style={{ margin: 4 }}>
          <TimelineDot variant="outlined" color={work ? "primary" : "success"} />
          <TimelineConnector style={{ background: `${work ? "#1976d2" : "#2e7d32"}` }} />
        </TimelineSeparator>
      </TimelineItem>
    </>
  )
} 