import { useState } from "react"
import Jobs from "./Jobs"
import { useParams } from "react-router-dom"

const HomePage = () => {
  const params = useParams()
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

  const searchJobsByCompany = async () => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params}`)

      if (response.ok) {
        setJobs(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

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

      {(jobs !== undefined || !null) && jobs.map((element) => <Jobs key={element._id} job={element} companyFetch={searchJobsByCompany} />)}
    </>
  ) // i passed the function just here, but we ned to fetch the results in SEARCHRESULTS section
}

export default HomePage
