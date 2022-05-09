import { useState } from "react"
import Jobs from "./Jobs"

const HomePage = () => {
  const [jobs, setJobs] = useState()
  //   const [query, setQuery] = useState()

  /*   const searchJobsByCategory = async (filter) => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${filter}&limit=10`)

      if (response.ok) {
        setJobs(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const searchJobsByCompany = async (filter) => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${filter}&limit=10`)

      if (response.ok) {
        setJobs(response)
      }
    } catch (error) {
      console.log(error)
    }
  } */

  const searchJobsByTitle = async (filter) => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${filter}`)
      if (response.ok) {
        console.log(response)
        setJobs(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <input type="text" placeholder="filter by Title" onChange={(event) => searchJobsByTitle(event.target.value)} />
      {/* <input type="text" placeholder="filter by Category" onChange={() => searchJobsByCategory} /> */}
      {/* <input type="text" placeholder="filter by Company" onChange={() => searchJobsByCompany} /> */}

      {(jobs !== undefined || null) && <Jobs job={jobs} />}
    </>
  )
}

export default HomePage
