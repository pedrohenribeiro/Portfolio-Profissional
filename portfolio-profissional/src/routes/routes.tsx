import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Projetos from '../pages/projetos/Projetos'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projetos" element={<Projetos />} />
    
  </Routes>
);

export default AppRoutes;