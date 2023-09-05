import { Card } from 'react-bootstrap';
import { education } from '../data/education.json';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
  TimelineDot
} from '@mui/lab';

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>

      <h2>Education</h2>

      <Timeline position="alternate">
        {education.map((item, index) => {
          return (
            <>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item?.description}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item?.institution}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot variant="outlined" color={index % 2 == 0 ? "primary" : "success"} />
                  <TimelineConnector style={{ background: `${index % 2 == 0 ? "#1976d2" : "#2e7d32"}` }} />
                </TimelineSeparator>

                <TimelineOppositeContent>
                  <Card className={index % 2 == 0 ? 'align-items-start' : 'align-items-end'}>
                    <Card.Title>
                      {item?.studyType}
                    </Card.Title>
                    <Card.Text>
                      {item?.startDate} - {item?.endDate}
                    </Card.Text>
                  </Card>
                </TimelineOppositeContent>
              </TimelineItem>
            </>
          )
        })}
      </Timeline>
    </>
  )
}