import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
// import { useParams } from "react-router-dom"

const SearchResults = () => {
  // const params = useParams()
  const [company, setCompany] = useState([])

  useEffect(() => {
    searchJobsByCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const searchJobsByCompany = async () => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${company.company_name}`)

      if (response.ok) {
        const { data } = response.json()
        setCompany(data)
      }
      console.log(company)
    } catch (error) {
      console.log(error)
    }
  }

  return <Row>{company.company_name}</Row>
}

export default SearchResults
