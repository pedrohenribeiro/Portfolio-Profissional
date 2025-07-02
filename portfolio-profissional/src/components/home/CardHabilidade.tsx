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
    </div>
  );
}

export default CardHabilidade;