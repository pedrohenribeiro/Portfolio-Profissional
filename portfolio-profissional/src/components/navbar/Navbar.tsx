import styles from  './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>

      <div className={styles.botoes}>
        <button className={styles.botao}>Home</button>
        <button className={styles.botao}>Sobre mim</button>
        <button className={styles.botao}>Projetos</button>
        <button className={styles.botao}>Formações</button>
      </div>

    </div>
  );
}

export default Navbar;