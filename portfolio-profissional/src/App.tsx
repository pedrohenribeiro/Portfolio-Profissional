import Home from './pages/home/Home'
import Projetos from './pages/projetos/Projetos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobremim" element={<Projetos/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
