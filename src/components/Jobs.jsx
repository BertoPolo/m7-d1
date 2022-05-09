import { Container, Row } from "react-bootstrap"
const Jobs = (job) => (
  <>
    <Container>
      <Row>{job.title}</Row>
      <Row>{job.category}</Row>
    </Container>
  </>
)

export default Jobs
