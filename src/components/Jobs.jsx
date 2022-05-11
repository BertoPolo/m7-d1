import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Jobs = ({ job }) => {
  return (
    <>
      <Row>
        <Link to={`/:${job.company_name}`}>
          <p>{job.title}</p> from : <span>{job.company_name}</span>
        </Link>
      </Row>
      <hr />
    </>
  )
}

export default Jobs
