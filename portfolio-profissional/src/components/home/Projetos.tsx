import styles from  './Projetos.module.css';
import foto from '../../assets/images/techschool-dark.png';

function Projetos() {
  return (
    <div className={styles.container}>

   
        <img
            className={styles.card}
            src={foto}>
        </img>


      <div className={styles.descricao}>
        <div className={styles.tecnologias}>
            <p className={styles.tecnologia}>Html</p>
            <p className={styles.tecnologia}>Css</p>
            <p className={styles.tecnologia}>Flask</p>
        </div>
        <div className={styles.infoTopo}>
            <h2 className={styles.titulo}>
                Techschool
            </h2>
            <p className={styles.periodo}>
                // 1º Semestre de 2023
            </p>
        </div>

        <p className={styles.texto}>
            O desenvolvimento do projeto ocorreu no primeiro semestre do curso, com a direção do professor Antônio Egydio, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho.
            <br/>
            Desenvolver um site informativo, simples e funcional sobre a Metodologia Ágil, contendo conceitos e fundamentos, além de exemplos práticos e um sistema de avaliações para o usuário.
        </p>

        <button className={styles.botao}>
            Veja mais
        </button>
      </div>

    </div>
  );
}

export default Projetos;