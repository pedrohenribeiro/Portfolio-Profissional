import styles from './Projetos.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaYoutube } from 'react-icons/fa';
import Footer from '../../components/footer/Footer';
import techschoolImg from '../../assets/images/techschool-dark.png';
import dashboardImg from '../../assets/images/dashboard.png';
import wecolebImg from '../../assets/images/wecoleb.png';
import recibifyImg from '../../assets/images/recibify.png';
import nutrimindImg from '../../assets/images/nutriming.png';
import rocketImg from '../../assets/images/rocketBoost.png';

const techIcones: Record<string, string> = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Expo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Unity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Gradle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg",
  "Eclipse": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
};

interface Projeto {
  nome: string;
  cliente: string;
  papel: string;
  descricaoCurta: string;
  problema: string;
  solucao: string;
  tecnologias: string[];
  contribuicoes: string[];
  periodo: string;
  foto: string;
  link: string;
  linkGithub: string;
  linkVideo?: string;
}

const projetosDev: Projeto[] = [
  {
    nome: "Techschool",
    cliente: "Prof. Antonio Egydio — FATEC SJC",
    papel: "Dev Team",
    descricaoCurta: "Site informativo sobre Metodologia Ágil com quizzes interativos e sistema de avaliação.",
    problema: "A empresa do professor precisava adotar o Scrum, mas os colaboradores não tinham conhecimento sobre Metodologias Ágeis. Era necessária uma forma prática e acessível de capacitá-los sem demandar treinamentos presenciais complexos.",
    solucao: "Desenvolvemos um site informativo sobre Metodologia Ágil com quizzes interativos, exemplos práticos e um sistema de avaliações para medir o entendimento dos usuários. O site foi hospedado na AWS e Hostinger, tornando o aprendizado acessível a qualquer momento.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "Bootstrap", "Figma", "AWS"],
    contribuicoes: [
      "Protótipo interativo no Figma",
      "Roteamento e estrutura de páginas com Flask",
      "Botões animados e modais interativos",
      "Sistema de download de arquivos (burndown/backlog)",
      "Responsividade completa da aplicação",
      "Footer responsivo",
      "Deploy na AWS e Hostinger",
    ],
    periodo: "1º Semestre de 2023",
    foto: techschoolImg,
    link: "https://techschool.pedrohenribeiro.com/",
    linkGithub: "https://github.com/pedrohenribeiro/Projeto-de-API-1-Semestre",
  },
  {
    nome: "Dashboard Pro4Tech",
    cliente: "Pro4Tech",
    papel: "Dev Team",
    descricaoCurta: "Dashboard interativo para análise e visualização de dados de vendas com importação de Excel.",
    problema: "A Pro4Tech armazenava grandes volumes de dados de vendas em planilhas Excel. Relatórios gerados manualmente eram lentos, complexos e sujeitos a erros, dificultando a tomada de decisões estratégicas.",
    solucao: "Um sistema web que importa dados diretamente de arquivos Excel, armazena no banco de dados e os exibe em gráficos e tabelas interativas. Inclui segmentação de dados, cálculo automático de comissões e visões personalizadas para gerentes e vendedores.",
    tecnologias: ["React", "TypeScript", "JavaScript", "Node.js", "MySQL", "Figma"],
    contribuicoes: [
      "Protótipo no Figma com gráficos e tabelas",
      "Gráfico de vendas mensais por vendedor",
      "Upload e edição de foto de perfil (frontend + backend + banco de dados)",
      "Foto de perfil na tabela de vendedores com atualização automática",
      "Exclusão de vendedores",
      "Modais interativos para edição de todos os dados das tabelas",
      "Filtros para gráficos e tabelas",
      "Cadastro de vendedor via upload de Excel com credenciais temporárias",
      "Cadastro de clientes",
      "Perfil individual de vendedor com controle de acesso por função",
    ],
    periodo: "1º Semestre de 2024",
    foto: dashboardImg,
    link: "",
    linkGithub: "https://github.com/Equipe-Meta-Code/Dashboard-Pro4Tech",
  },
  {
    nome: "Wecolleb",
    cliente: "JJM Log",
    papel: "Dev Team",
    descricaoCurta: "Sistema web para controle de processos internos com permissões por função e colaboração entre departamentos.",
    problema: "A JJM Log utilizava fluxos de trabalho manuais em múltiplas ferramentas não integradas, causando baixa visibilidade entre departamentos, falhas de comunicação entre equipes e gestão ineficiente de demandas.",
    solucao: "Um sistema web para controle de demandas internas com telas customizadas por função e permissões de usuário. Processos manuais foram automatizados e o acompanhamento de atividades em tempo real foi habilitado para promover a colaboração entre departamentos.",
    tecnologias: ["React", "TypeScript", "Node.js", "MySQL", "Figma"],
    contribuicoes: [
      "Protótipo interativo no Figma",
      "Backend do fluxograma de processos",
      "Solicitação de ordens de serviço (frontend + backend)",
      "Atualização e exclusão de etapas e ordens",
      "Histórico de conclusão de etapas",
      "Portal do colaborador com upload, visualização e remoção de arquivos",
      "Upload de PDF no portal do colaborador",
      "Atribuição de função ao cadastrar novo funcionário pelo gerente",
    ],
    periodo: "2º Semestre de 2024",
    foto: wecolebImg,
    link: "",
    linkGithub: "https://github.com/Equipe-Meta-Code/WE-COLEB-JJM-Log",
  },
  {
    nome: "Recibify",
    cliente: "GSW Software",
    papel: "Dev Team",
    descricaoCurta: "Solução integrada: app mobile para colaboradores e sistema web corporativo para gestão de reembolsos.",
    problema: "O processo de reembolso da GSW era totalmente manual, sujeito a erros e lento. Os colaboradores não tinham uma forma prática de submeter despesas com comprovantes, e os gerentes não tinham visibilidade em tempo real para aprovações.",
    solucao: "Uma solução de dupla plataforma integrada: app mobile em React Native para colaboradores submeterem despesas com comprovantes (PDF ou fotos), e sistema web corporativo em React para gerentes revisarem, filtrarem, aprovarem ou rejeitarem pacotes de reembolso em tempo real.",
    tecnologias: ["React", "React Native", "TypeScript", "Node.js", "MongoDB", "MySQL", "Expo", "Android Studio", "Figma"],
    contribuicoes: [
      "Tela de perfil do usuário com dados e contagem de projetos/despesas pendentes",
      "Estrutura do sistema web corporativo com menu lateral retrátil",
      "Lista de despesas organizadas por pacotes com codificação de cores por categoria",
      "Sistema de aprovação de pacotes (aprovar/rejeitar completo ou individualmente por despesa)",
      "Filtros do sistema web corporativo",
      "Responsividade do sistema web",
      "Navbar ajustável com props",
      "Criação de novo projeto com múltiplos funcionários, departamentos e categorias",
      "Adição de funcionário a projeto existente",
      "Deploy do backend e sistema web na Hostinger VPS",
      "Upload de foto de perfil (galeria ou câmera)",
      "Upload de comprovante (PDF + galeria/foto, múltiplos por despesa)",
      "Preview do comprovante antes do envio",
      "Cadastro de múltiplas despesas com edição antes de submeter",
      "Geração de APK",
    ],
    periodo: "1º Semestre de 2025",
    foto: recibifyImg,
    link: "",
    linkGithub: "https://github.com/Equipe-Meta-Code/SistemaReembolso-GSW-Software",
  },
  {
    nome: "NutriMind",
    cliente: "Xertica",
    papel: "Product Owner & Dev Team",
    descricaoCurta: "Agente de IA generativa conversacional para suporte nutricional personalizado baseado no perfil de saúde do paciente.",
    problema: "Muitas pessoas não têm acesso a profissionais de nutrição por barreiras logísticas e financeiras, tornando o suporte dietético personalizado baseado em condições individuais de saúde inacessível para grande parte da população.",
    solucao: "Um agente de IA conversacional inteligente que interage naturalmente com o usuário para fornecer suporte nutricional personalizado com base no perfil de saúde. Utiliza RAG com ChromaDB e Google Gemini para recomendar planos alimentares, monitorar progresso e responder dúvidas sobre nutrição e bem-estar.",
    tecnologias: ["Python", "Flask", "Java", "Spring Boot", "PostgreSQL", "Vue.js", "JavaScript", "CSS3"],
    contribuicoes: [
      "Implementação de RAG em Python (embeddings, chunks, overlaps, salvo no ChromaDB)",
      "Ferramenta para o agente de IA consultar o RAG",
      "Primeiro agente de IA (usa ferramenta RAG para responder dúvidas nutricionais)",
      "Ferramenta para atualizar o plano alimentar do usuário",
      "Layout inicial da tela de perfil do usuário",
      "Funcionalidade para IA modificar plano alimentar com base em fotos de alimentos",
      "Ferramenta para atualizar o perfil de saúde do usuário (anamnese)",
      "Prompts dos agentes de IA para edição do perfil de saúde via chat",
      "Criação do backlog de produto e backlog de sprint (Product Owner)",
      "Comunicação com o cliente Xertica para validação do backlog",
    ],
    periodo: "2º Semestre de 2025",
    foto: nutrimindImg,
    link: "",
    linkGithub: "https://github.com/Equipe-Meta-Code/NutriMind-Xertica",
    linkVideo: "https://youtu.be/poiV-mcqf8Y",
  },
];

const projetosGameDev: Projeto[] = [
  {
    nome: "Primeiro Jogo",
    cliente: "Projeto pessoal",
    papel: "Game Developer",
    descricaoCurta: "Jogo desenvolvido durante curso na Udemy para aprender os fundamentos do desenvolvimento com Unity.",
    problema: "Necessidade de aprender os fundamentos do desenvolvimento de jogos, incluindo física, animações e lógica de jogo em um motor profissional.",
    solucao: "Desenvolvimento de um jogo completo com Unity e C#, aplicando conceitos de física, colisão, animações e lógica de gameplay para solidificar o aprendizado prático com a engine.",
    tecnologias: ["Unity", "C#"],
    contribuicoes: [
      "Desenvolvimento completo do jogo com Unity",
      "Implementação de física e colisões",
      "Criação de animações do personagem",
      "Lógica de gameplay e pontuação",
    ],
    periodo: "1º Semestre de 2025",
    foto: rocketImg,
    link: "",
    linkGithub: "",
  },
];

function Projetos() {
  const { nome, tipo } = useParams<{ nome: string; tipo: string }>();
  const navigate = useNavigate();

  const projetos = tipo === 'dev' ? projetosDev : projetosGameDev;
  const projeto = projetos.find(p => p.nome === decodeURIComponent(nome ?? ''));

  if (!projeto) {
    return (
      <main className={styles.page}>
        <div className={styles.naoEncontrado}>
          <h1>Projeto não encontrado</h1>
          <button className={styles.voltarBtn} onClick={() => navigate('/')}>
            <FaArrowLeft /> Voltar ao início
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <button className={styles.voltarBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </button>

      <section className={styles.heroContainer}>
        <img src={projeto.foto} alt={projeto.nome} className={styles.heroImagem} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroConteudo}>
          <span className={styles.heroPeriodoBadge}>{projeto.periodo}</span>
          <h1 className={styles.heroTitulo}>{projeto.nome}</h1>
          <p className={styles.heroCliente}>{projeto.cliente}</p>
          <p className={styles.heroDescricaoCurta}>{projeto.descricaoCurta}</p>
        </div>
      </section>

      <div className={styles.conteudo}>

        <div className={styles.infoRow}>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Período</p>
            <p className={styles.infoValor}>{projeto.periodo}</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Cliente / Parceiro</p>
            <p className={styles.infoValor}>{projeto.cliente}</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Papel no Time</p>
            <p className={styles.infoValor}>{projeto.papel}</p>
          </div>
        </div>

        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>O Desafio</h2>
          <p className={styles.secaoTexto}>{projeto.problema}</p>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>A Solução</h2>
          <p className={styles.secaoTexto}>{projeto.solucao}</p>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>Tecnologias Utilizadas</h2>
          <div className={styles.techGrid}>
            {projeto.tecnologias.map((tech) => (
              <div key={tech} className={styles.techItem}>
                {techIcones[tech] ? (
                  <img
                    src={techIcones[tech]}
                    alt={tech}
                    className={styles.techIcone}
                  />
                ) : (
                  <span className={styles.techIconeTexto}>{tech[0]}</span>
                )}
                <span className={styles.techNome}>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>Minhas Contribuições</h2>
          <ul className={styles.contribuicoes}>
            {projeto.contribuicoes.map((contrib, idx) => (
              <li key={idx} className={styles.contribuicao}>
                {contrib}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>Links</h2>
          <div className={styles.linksContainer}>
            {projeto.linkGithub && (
              <a
                href={projeto.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <FaGithub /> Ver no GitHub
              </a>
            )}
            {projeto.link && (
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
              >
                <FaExternalLinkAlt /> Ver projeto ao vivo
              </a>
            )}
            {projeto.linkVideo && (
              <a
                href={projeto.linkVideo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.linkBtnVideo}`}
              >
                <FaYoutube /> Ver demonstração
              </a>
            )}
            {!projeto.linkGithub && !projeto.link && !projeto.linkVideo && (
              <p className={styles.semLinks}>Links em breve</p>
            )}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

export default Projetos;
