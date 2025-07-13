import styles from './Projetos.module.css';

interface ProjetosProps {
  foto: string;
  tecnologias: string[];
  titulo: string;
  periodo: string;
  texto: string;
  lado?: 'esquerda' | 'direita';
}

function Projetos({ foto, tecnologias, titulo, periodo, texto, lado = 'esquerda' }: ProjetosProps) {
  return (
    <article className={styles.container}>
      {lado === 'esquerda' ? (
        <>
          <img className={styles.card} src={foto} alt={titulo} />
          <section className={styles.descricao}>
            <header className={styles.infoTopo}>
              <h2 className={styles.titulo}>{titulo}</h2>
              <p className={styles.periodo}>{periodo}</p>
            </header>
            <div className={styles.tecnologias}>
              {tecnologias.map((tec, idx) => (
                <p className={styles.tecnologia} key={idx}>{tec}</p>
              ))}
            </div>
            <p className={styles.texto}>{texto}</p>
            <button className={styles.botao}>Veja mais</button>
          </section>
        </>
      ) : (
        <>
          <section className={styles.descricao}>
            
            <header className={styles.infoTopo}>
              <h2 className={styles.titulo}>{titulo}</h2>
              <p className={styles.periodo}>{periodo}</p>
            </header>
            <div className={styles.tecnologias}>
              {tecnologias.map((tec, idx) => (
                <p className={styles.tecnologia} key={idx}>{tec}</p>
              ))}
            </div>
            <p className={styles.texto}>{texto}</p>
            <button className={styles.botao}>Veja mais</button>
          </section>
          <img className={styles.card} src={foto} alt={titulo} />
        </>
      )}
    </article>
  );
}

export default Projetos;