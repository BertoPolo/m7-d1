import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import SearchResults from "./components/SearchResults"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:company" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
