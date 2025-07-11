import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <ul className={styles.botoes}>
        <li>
          <button
            className={styles.botao}
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const elemento = document.getElementById("home");
                  if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const elemento = document.getElementById("home");
                if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={styles.botao}
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const elemento = document.getElementById("sobremim");
                  if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const elemento = document.getElementById("sobremim");
                if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Sobre mim
          </button>
        </li>
        <li>
          <button
            className={styles.botao}
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const elemento = document.getElementById("projetos");
                  if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const elemento = document.getElementById("projetos");
                if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projetos
          </button>
        </li>
        <li>
          <button className={styles.botao}>Formações</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;