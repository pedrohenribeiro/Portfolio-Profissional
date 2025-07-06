import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './routes/routes';
import './global/Colors.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;