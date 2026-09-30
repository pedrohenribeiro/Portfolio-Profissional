import styles from './Projetos.module.css';
import { useNavigate } from 'react-router-dom';

interface ProjetosProps {
  foto: string;
  tecnologias: string[];
  titulo: string;
  periodo: string;
  texto: string;
  lado?: 'esquerda' | 'direita';
  tipo?: 'dev' | 'gameDev';
}

function Projetos({ foto, tecnologias, titulo, periodo, texto, lado = 'esquerda', tipo = 'dev' }: ProjetosProps) {
  const navigate = useNavigate();

  const imagem = <img className={styles.card} src={foto} alt={titulo} />;

  const descricao = (
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
      <button
        className={styles.botao}
        onClick={() => navigate(`/projetos/${encodeURIComponent(titulo)}/${tipo}`)}
      >
        Veja mais
      </button>
    </section>
  );

  return (
    <article className={styles.container}>
      {lado === 'esquerda' ? (
        <>
          {imagem}
          {descricao}
        </>
      ) : (
        <>
          {descricao}
          {imagem}
        </>
      )}
    </article>
  );
}

export default Projetos;
