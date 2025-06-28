import Home from './pages/home/Home'
import Projetos from './pages/projetos/Projetos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './global/Colors.css';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobremim" element={<Projetos/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
