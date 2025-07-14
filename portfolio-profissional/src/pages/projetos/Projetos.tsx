import styles from './Projetos.module.css';
import { useParams } from 'react-router-dom';

interface ProjetosProps {
  nome: string;
  tipo: string;
}

function Projetos() {
  const { nome, tipo } = useParams<{ nome: string; tipo: string }>();

  const projetosDev = [
    {
      nome: "Recibify",
      descricao: "Criamos um aplicativo móvel que permite aos usuários registrar reembolsos, anexar comprovantes, incluir descrições e acompanhar o status das solicitações.",
      tecnologias: ["ReactNative", "TypeScript", "Node.Js", "Expo Go", "MySQL", "MongoDB", "Figma", "Hostinger"],
      periodo: "1º Semestre de 2025",
      foto: "https://i.imgur.com/1234567890.png",
      link: "https://www.google.com",
      linkGithub: "https://www.google.com",
    },
    {
      nome: "Techschool",
      descricao: "O desenvolvimento do projeto ocorreu no primeiro semestre do curso, com a direção do professor Antônio Egydio, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho. Desenvolver um site informativo, simples e funcional sobre a Metodologia Ágil, contendo conceitos e fundamentos, além de exemplos práticos e um sistema de avaliações para o usuário.",
      tecnologias: ["Html", "Css", "Flask", "Figma"],
      periodo: "1º Semestre de 2023",
      foto: "https://i.imgur.com/1234567890.png",
      link: "https://www.google.com",
      linkGithub: "https://www.google.com",
    },
    {
      nome: "Dashboard Pro4Tech",
      descricao: "O desenvolvimento do projeto ocorreu no terceiro semestre do curso, com a empresa Pro4Tech sendo o nosso cliente externo, que me ajudou muito a aproximar da realidade do mercado de trabalho.O objetivo deste projeto foi criar um dashboard dinâmico e interativo para análise e visualização de dados de vendas. O sistema foi projetado para gerar insights visuais claros e rápidos, permitindo que a Pro4Tech tomasse decisões estratégicas baseadas em dados reais. A principal meta foi facilitar a interpretação de grandes volumes de dados de vendas.",
      tecnologias: ["React", "TypeScript", "JavaScript", "Node.Js", "Figma", "MySQL"],
      periodo: "1º Semestre de 2024",
      foto: "https://i.imgur.com/1234567890.png",
      link: "https://www.google.com",
      linkGithub: "https://www.google.com",
    },
    {
      nome: "Wecolleb",
      descricao: "O desenvolvimento do projeto ocorreu no quarto semestre do curso, com a empresa JJM Log sendo o nosso cliente externo, que me ajudou muito a aproximar da realidade do mercado de trabalho. O objetivo deste projeto foi desenvolver um sistema web que otimizasse o controle de processos internos na JJM Log, facilitando a colaboração entre diferentes departamentos e automatizando atividades manuais. A principal meta foi melhorar a integração entre setores e proporcionar uma gestão de demandas mais eficiente e em tempo real.",
      tecnologias: ["React", "TypeScript", "Node.Js", "Figma", "MySQL"],
      periodo: "2º Semestre de 2024",
      foto: "https://i.imgur.com/1234567890.png",
      link: "https://www.google.com",
      linkGithub: "https://www.google.com",
    },
  ]

  const projetosGameDev = [
    {
      nome: "Primeiro Jogo",
      descricao: "O desenvolvimento do projeto ocorreu no primeiro semestre do curso, com a direção do professor Antônio Egydio, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho. Desenvolver um site informativo, simples e funcional sobre a Metodologia Ágil, contendo conceitos e fundamentos, além de exemplos práticos e um sistema de avaliações para o usuário.",
      tecnologias: ["Unity", "C#"],
      periodo: "2º Semestre de 2025",
      foto: "https://i.imgur.com/1234567890.png",
      link: "https://www.google.com",
      linkGithub: "https://www.google.com",
    }
  ]

  const projetos = tipo === 'dev' ? projetosDev : projetosGameDev;
  const projeto = projetos.find(projeto => projeto.nome === nome);

  return (
    <main className={styles.page}>
      <section className={styles.containerIntroducao}>
        <h1>{projeto?.nome}</h1>
        <p>{projeto?.descricao}</p>
        <p>{projeto?.periodo}</p>
        <p>{projeto?.tecnologias}</p>
        <p>{projeto?.link}</p>
        <p>{projeto?.linkGithub}</p>
      </section>
      <section className={styles.containerInformacoes}>

      </section>
      <section className={styles.containerContribuicoes}>

      </section>
      <section className={styles.containerAdicionais}>

      </section>

    </main>
  );
}

export default Projetos;