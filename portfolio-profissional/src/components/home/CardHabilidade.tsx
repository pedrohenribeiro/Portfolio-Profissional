import styles from './CardHabilidade.module.css';

interface CardHabilidadeProps {
  nome: string;
  link: string;
}

function CardHabilidade({ nome, link}: CardHabilidadeProps) {

  return (
    <div className={styles.cardHabilidade}>
        <img 
        src={link}
        alt={nome} 
        className={styles.iconeHabilidade} 
        />
        <h3 className={styles.textoHabilidade}>{nome}</h3>
    </div>
  );
}

export default CardHabilidade;