import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>

      <div className={styles.botoes}>
        <button className={styles.botao} onClick={() => navigate('/')}>Home</button>
        <button className={styles.botao}>Sobre mim</button>
        <button className={styles.botao} onClick={() => navigate('/projetos')}>Projetos</button>
        <button className={styles.botao}>Formações</button>
      </div>

    </div>
  );
}

export default Navbar;