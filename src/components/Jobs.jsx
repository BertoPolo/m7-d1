import { Container, Row } from "react-bootstrap"
const Jobs = ({ job }) => {
  return (
    <>
      <Container>
        <Row>
          <p>{job.title}</p>
        </Row>
      </Container>
      <hr />
    </>
  )
}

export default Jobs
