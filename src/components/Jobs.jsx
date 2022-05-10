import { Container, Row } from "react-bootstrap"
const Jobs = ({ job }) => {
  return (
    <>
      <Container>
        <Row>
          <p>{job.title}</p>
        </Row>
        <Row>
          <p>{job.category}</p>
        </Row>
        <Row>{job.description}`</Row>
      </Container>
      <hr />
    </>
  )
}

export default Jobs
