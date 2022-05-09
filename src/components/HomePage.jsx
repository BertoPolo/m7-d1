import { useState } from "react"

const HomePage = () => {
  const [jobs, setJobs] = useState()

  const getJobs = async () => {
    try {
      const response = await fetch.get("https://strive-jobs-api.herokuapp.com/jobs")

      if (response.ok) {
        setJobs(response)
      }
    } catch (error) {
      console.log(error)
    }

    const searchJobs = async () => {
      try {
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <input type="text" placeholder="insert a filter here" />
    </>
  )
}

export default HomePage
