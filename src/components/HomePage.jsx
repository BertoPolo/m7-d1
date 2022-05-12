import { useState } from "react"
import Jobs from "./Jobs"
// import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"

const HomePage = () => {
  // const params = useParams()
  const [jobs, setJobs] = useState([])

  // const searchJobsByCategory = async (filter) => {
  //   try {
  //     const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${params}&limit=10`)

  //     if (response.ok) {
  //       setJobs(response)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const searchJobsByTitle = async (filter) => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${filter}&limit=3`)
      if (response.ok) {
        const { data } = await response.json()

        // console.log(data)
        setJobs(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <input type="text" placeholder="filter by Title" onChange={(event) => searchJobsByTitle(event.target.value)} />
      <Container>{(jobs !== undefined || !null) && jobs.map((element) => <Jobs key={element._id} job={element} />)}</Container>
    </>
  )
}

export default HomePage
