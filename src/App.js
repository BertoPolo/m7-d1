import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
