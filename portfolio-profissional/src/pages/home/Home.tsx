import styles from './Home.module.css';
import foto from '../../assets/images/foto.png';
import techschoolImg from '../../assets/images/techschool-dark.png';
import zariImg from '../../assets/images/assistente-zari.png';
import dashboardImg from '../../assets/images/dashboard.png';
import Projetos from '../../components/home/Projetos';

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.containerTopo}>


        <img
          src={foto}
          alt="Foto de perfil"
          className={styles.foto}
        />

        <h1 className={styles.nome}>Pedro Henrique Ribeiro</h1>
        <h2 className={styles.area}>FullStack</h2>
        <p className={styles.texto}>
          Olá, meu nome é Pedro Henrique Ribeiro, tenho 20 anos e atualmente estou cursando o 5º semestre do curso de Análise e Desenvolvimento de Sistemas na Fatec de São José dos Campos.
          Estou em busca da minha primeira oportunidade na área de tecnologia. Tenho muita vontade de aprender, crescer e contribuir com o time. Gosto de encarar desafios e estou sempre buscando evoluir, tanto nas habilidades técnicas quanto nas interpessoais.
        </p>

        <button className={styles.botao}>Contate-me</button>

      </div>

      <div className={styles.containerSobremim}>
        <h1 className={styles.titulo}>
          Sobre mim
        </h1>
        <h2 className={styles.subtitulo}>
          Me conheça melhor
        </h2>

        <p className={styles.texto}>
          Eu sempre fui apaixonado por tecnologia, eu gostava muito de jogar no video game e no computador, então no meio do ensino fundamental, em 2016 eu comecei a estudar Game Design na Microcamp, tive meu primeiro contato com uma linguagem de programação com c++ na Unreal Engine 3.5. Minha parte favorita na época era modelagem 3D no 3DMax. Em 2018 quando terminei o curso e comecei a fazer outros 2 cursos em focados para Game Design na Advanced e Saga, finalizei o curso da advanced mas precisei sair do curso da Saga, nesse mesmo período (2017) também iniciei o curso Hardware e Robótica na Microcamp, onde me apaixonei por IOT(Inteligência das coisas), finalizei o curso em 2018.
        </p>

        {/*         <p className={styles.texto}>
          Em 2019, participei do Empreende19, uma feira para alunos de escolas públicas de SJC, apresentando o MaxClean, uma torneira tecnológica que dispunha de sensores para controlar água e sabão, além de LEDs indicadores de nível de sabão, sendo responsável pela parte eletrônica e codificação.
        </p>

        <p className={styles.texto}>
          Obtive uma bolsa integral e comecei a estudar Eletrônica na Univap Centro em 2020, onde realizei diversos projetos e aprofundei meu conhecimento em programação C++. Em 2022, concluí meu TCC com um robô de inspeção de tubulações, controlado remotamente por um aplicativo com câmera, lanterna e sensores de gás para detecção de vazamentos, resultando na minha primeira patente.
        </p> */}

        <p className={styles.texto}>
          Posteriormente, decidi mudar minha direção de estudos e ingressei na Fatec para o curso de Análise e Desenvolvimento de Sistemas, onde me dediquei a vários projetos API (Aprendizagem por Projetos Integrados). Minha ênfase foi no desenvolvimento web, começando com HTML, CSS e JavaScript, evoluindo para React e TypeScript. Além disso, adquiri habilidades em bancos de dados como MySQL e MongoDB, e estou aprofundando meus conhecimentos em nuvem, já possuo o certificado Microsoft Azure-900 Fundamentals e Google Cloud Computing Foundations, estou cursando o AWS Academy Cloud Foundations.
        </p>

      </div>

      <div className={styles.containerHabilidades}>
        <h1 className={styles.titulo}>
          Habilidades
        </h1>
        <h2 className={styles.subtitulo}>
          Confira minhas habilidades
        </h2>

        <div className={styles.habilidades}>
          <div className={styles.habilidade}>HTML</div>
          <div className={styles.habilidade}>CSS</div>
          <div className={styles.habilidade}>JavaScript</div>
          <div className={styles.habilidade}>TypeScript</div>
          <div className={styles.habilidade}>React</div>
          <div className={styles.habilidade}>React Native</div>
          <div className={styles.habilidade}>Node.js</div>
          <div className={styles.habilidade}>Express.js</div>
          <div className={styles.habilidade}>MongoDB</div>
          <div className={styles.habilidade}>MySQL</div>
          <div className={styles.habilidade}>GitHub</div>
          <div className={styles.habilidade}>Azure</div>
          <div className={styles.habilidade}>AWS</div>
          <div className={styles.habilidade}>Google Cloud Platform</div>
          <div className={styles.habilidade}>Godot</div>
        </div>
      </div>

      <div className={styles.containerProjetos}>
        <h1 className={styles.titulo} id={styles.meusProjetos}>
          Meus Projetos
        </h1>
        <h2 className={styles.subtitulo}>
          Confira alguns dos meus projetos
        </h2>

        <Projetos
          foto={techschoolImg}
          tecnologias={['Html', 'Css', 'Flask', 'Figma']}
          titulo="Techschool"
          periodo="// 1º Semestre de 2023"
          texto="O desenvolvimento do projeto ocorreu no primeiro semestre do curso, com a direção do professor Antônio Egydio, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho. Desenvolver um site informativo, simples e funcional sobre a Metodologia Ágil, contendo conceitos e fundamentos, além de exemplos práticos e um sistema de avaliações para o usuário."
          lado='esquerda'
        />

        <Projetos
          foto={zariImg}
          tecnologias={['Java', 'MySQL', 'Gradle', 'Eclipse', 'Figma']}
          titulo="Assistente Zari"
          periodo="// 2º Semestre de 2023"
          texto="O desenvolvimento do projeto ocorreu no segundo semestre do curso, com a direção do professor Giuliano Bertoti, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho. O projeto desenvolvido no 2º semestre teve como objetivo criar um assistente virtual capaz de ler documentos e responder a perguntas relacionadas ao seu conteúdo, facilitando o acesso rápido a informações específicas."
          lado='direita'
        />

        <Projetos
          foto={dashboardImg}
          tecnologias={['React', 'TypeScript', 'JavaScript', 'Node.Js', 'Figma', 'MySQL']}
          titulo="Dashboard Pro4Tech"
          periodo="// 1º Semestre de 2024"
          texto="O desenvolvimento do projeto ocorreu no terceiro semestre do curso, com a empresa Pro4Tech sendo o nosso cliente externo, que me ajudou muito a aproximar da realidade do mercado de trabalho.O objetivo deste projeto foi criar um dashboard dinâmico e interativo para análise e visualização de dados de vendas. O sistema foi projetado para gerar insights visuais claros e rápidos, permitindo que a Pro4Tech tomasse decisões estratégicas baseadas em dados reais, a principal meta foi facilitar a interpretação de grandes volumes de dados de vendas."
          lado='esquerda'
        />

      </div>

    </div>
  );
}

export default Home;