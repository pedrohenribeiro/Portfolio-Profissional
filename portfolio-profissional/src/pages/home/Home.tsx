import styles from './Home.module.css';
import foto from '../../assets/images/foto.png';
import techschoolImg from '../../assets/images/techschool-dark.png';
import wecolebImg from '../../assets/images/wecoleb.png';
import dashboardImg from '../../assets/images/dashboard.png';
import recibifyImg from '../../assets/images/recibify.png';
import githubWhite from '../../assets/images/github.svg';
import Projetos from '../../components/home/Projetos';
import CardHabilidade from '../../components/home/CardHabilidade';
import { useEffect, useState } from 'react';

function Home() {
  const [activeView, setActiveView] = useState('fullstack'); // 'fullstack' ou 'gamedev'

  const isFullStack = activeView === 'fullstack';

    useEffect(() => {
    if (activeView === 'gamedev') {
      document.body.classList.add('gamedev-theme');
    } else {
      document.body.classList.remove('gamedev-theme');
    }
  }, [activeView]);
  
  return (
    <div className={styles.page}>
      <div className={styles.containerTopo} id='home'>


        <img
          src={foto}
          alt="Foto de perfil"
          className={styles.foto}
        />

        <h1 className={styles.nome}>Pedro Henrique Ribeiro</h1>

        <div className={styles.toggleContainer}>
          <div className={`${styles.togglePill} ${!isFullStack ? styles.activeGameDev : ''}`}></div>
          <span 
            className={`${styles.toggleOption} ${isFullStack ? styles.activeText : ''}`}
            onClick={() => setActiveView('fullstack')}
          >
            FullStack
          </span>
          <span 
            className={`${styles.toggleOption} ${!isFullStack ? styles.activeText : ''}`}
            onClick={() => setActiveView('gamedev')}
          >
            GameDev
          </span>
        </div>

        <p className={styles.texto}>
          Olá, meu nome é Pedro Henrique Ribeiro, tenho 20 anos e atualmente estou cursando o 5º semestre do curso de Análise e Desenvolvimento de Sistemas na Fatec de São José dos Campos.
          Estou em busca da minha primeira oportunidade na área de tecnologia. Tenho muita vontade de aprender, crescer e contribuir com o time. Gosto de encarar desafios e estou sempre buscando evoluir, tanto nas habilidades técnicas quanto nas interpessoais.
        </p>

        <button className={styles.botao}>Contate-me</button>

      </div>

      <div className={styles.containerSobremim} id="sobremim">
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
        
        <div className={styles.habilidades}>
          <div className={styles.cardHabilidades}>
            <div className={styles.topoCard}>
              <h3 className={styles.tituloCard}>Hard Skils</h3>
            </div>
            <div className={styles.conteudoCard}>
              {isFullStack ? (
                <div className={styles.conjuntoHabilidades}>
                  <CardHabilidade
                    nome='JavaScript'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  />
                  <CardHabilidade
                    nome='TypeScript'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                  />
                  <CardHabilidade
                    nome='React Native'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                  />
                  <CardHabilidade
                    nome='Python'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  />
                  <CardHabilidade
                    nome='Flask'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
                  />
                  <CardHabilidade
                    nome='Node.js'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                  />
                  <CardHabilidade
                    nome='AWS'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
                  />
                  <CardHabilidade
                    nome='Azure'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
                  />
                  <CardHabilidade
                    nome='MongoDB'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                  />
                  <CardHabilidade
                    nome='MySQL'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                  />
                  <CardHabilidade
                    nome='Figma'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                  />
                  <CardHabilidade
                    nome='Java'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                  />
                  <CardHabilidade
                    nome='Unity'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg'
                  />
                  <CardHabilidade
                    nome='Godot'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg'
                  />
                  <CardHabilidade
                    nome='Jira'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
                  />
                  <CardHabilidade
                    nome='Github'
                    link={githubWhite}
                  />
                  <CardHabilidade
                    nome='Nginx'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
                  />
                  <CardHabilidade
                    nome='Linux'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
                  />
                </div>
              ) : (
                <div className={styles.conjuntoHabilidades}>
                  <CardHabilidade
                    nome='Unity'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg'
                  />
                  <CardHabilidade
                    nome='Godot'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg'
                  />
                  <CardHabilidade
                    nome='Blender'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg'
                  />
                  <CardHabilidade
                    nome='Python'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  />
                  <CardHabilidade
                    nome='Java'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                  />
                  <CardHabilidade
                    nome='Jira'
                    link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
                  />
                  <CardHabilidade
                    nome='Github'
                    link={githubWhite}
                  />
                </div>
              )}
              

            </div>
          </div>

        </div>
      </div>

      <div className={styles.containerProjetos} id='projetos'>
        <h1 className={styles.titulo} id={styles.meusProjetos}>
          Meus Projetos
        </h1>
        <h2 className={styles.subtitulo}>
          Confira alguns dos meus projetos
        </h2>

        {isFullStack ? (
          <div className={styles.projetos}>

            <Projetos
              foto={recibifyImg}
              tecnologias={['ReactNative', 'TypeScript', 'Node.Js', 'Expo Go', 'MySQL', 'MongoDB', 'Figma', 'Hostinger']}
              titulo="Recibify"
              periodo="1º Semestre de 2025"
              texto="📱 Criamos um aplicativo móvel que permite aos usuários registrar reembolsos, anexar comprovantes, incluir descrições e acompanhar o status das solicitações.
              💻 Também desenvolvemos um sistema web corporativo onde os gerentes podem monitorar as despesas e aprovar ou recusar solicitações, tornando o processo muito mais eficiente."
              lado='esquerda'
            />
            <Projetos
              foto={techschoolImg}
              tecnologias={['Html', 'Css', 'Flask', 'Figma']}
              titulo="Techschool"
              periodo="1º Semestre de 2023"
              texto="O desenvolvimento do projeto ocorreu no primeiro semestre do curso, com a direção do professor Antônio Egydio, que simulava ser um cliente externo para aproximar as equipes da realidade do mercado de trabalho. Desenvolver um site informativo, simples e funcional sobre a Metodologia Ágil, contendo conceitos e fundamentos, além de exemplos práticos e um sistema de avaliações para o usuário."
              lado='direita'
            />
            <Projetos
              foto={dashboardImg}
              tecnologias={['React', 'TypeScript', 'JavaScript', 'Node.Js', 'Figma', 'MySQL']}
              titulo="Dashboard Pro4Tech"
              periodo="1º Semestre de 2024"
              texto="O desenvolvimento do projeto ocorreu no terceiro semestre do curso, com a empresa Pro4Tech sendo o nosso cliente externo, que me ajudou muito a aproximar da realidade do mercado de trabalho.O objetivo deste projeto foi criar um dashboard dinâmico e interativo para análise e visualização de dados de vendas. O sistema foi projetado para gerar insights visuais claros e rápidos, permitindo que a Pro4Tech tomasse decisões estratégicas baseadas em dados reais, a principal meta foi facilitar a interpretação de grandes volumes de dados de vendas."
              lado='esquerda'
            />
            <Projetos
              foto={wecolebImg}
              tecnologias={['React', 'TypeScript', 'Node.Js', 'Figma', 'MySQL']}
              titulo="Wecolleb"
              periodo="2º Semestre de 2024"
              texto="O desenvolvimento do projeto ocorreu no quarto semestre do curso, com a empresa JJM Log sendo o nosso cliente externo, que me ajudou muito a aproximar da realidade do mercado de trabalho. O objetivo deste projeto foi desenvolver um sistema web que otimizasse o controle de processos internos na JJM Log, facilitando a colaboração entre diferentes departamentos e automatizando atividades manuais. A principal meta foi melhorar a integração entre setores e proporcionar uma gestão de demandas mais eficiente e em tempo real."
              lado='direita'
            />

          </div>
        ) : (
          <div className={styles.projetos}>
            <Projetos
              foto={recibifyImg}
              tecnologias={['Unity', 'C#']}
              titulo="Primeiro Jogo"
              periodo="1º Semestre de 2025"
              texto="Jogo desenvolvido durante o curso da udemy...."
            />
          </div>
        )}
        


      </div>

    </div>
  );
}

export default Home;