import Header from "../../components/Header";
import "./about.css";

const About = () => {
  return (
    <div className="master_wrapper">
      <Header title="Sobre Nós" image="/images/header_bg_1.jpg">
        A educação é o nosso passaporte para o futuro, pois, o amanhã pertence
        às pessoas que se preparam hoje.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img
              src="/images/about1.jpg"
              alt="quatro alunos a fazer ok com a mão"
            />
          </div>
          <div className="about__section-content">
            <h3>A Nossa História</h3>
            <p>
              Fundado em 1990 na freguesia de São Sebastião em Setúbal, A Coruja
              conta com 3 décadas ao serviço do ensino.
            </p>
            <p>
              <strong>A Coruja</strong>, possui uma equipa de
              professores/formadores dinâmicos e experientes nas diversas áreas
              do conhecimento, apoiando os alunos de um modo diferenciado,
              inovador e criativo, em que o ritmo e o modo de aprendizagem de
              cada aluno é respeitado.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h3>A Nossa Visão</h3>
            <p>
              Acreditamos que o sucesso profissional e pessoal de cada indivíduo
              advém de uma educação cuidada e acompanhada, de modo a que o aluno
              se torne pro-ativo e autónomo. Por isso assumimos ser um centro de
              estudos de referência quanto à qualidade e excelência educativa.
            </p>
            <p>
              Para nós cada aluno é único, focamos-nos nas necessidades
              individuais de cada um, com ensino de qualidade, personalizado e
              abrangente, assumindo o compromisso de o guiar no seu percurso de
              aprendizagem.
            </p>
          </div>
          <div className="about__section-image">
            <img
              src="/images/about2.jpg"
              alt="quatro alunos alunos na sala de aula"
            />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img
              src="/images/about3.jpg"
              alt="alunos na sala de aula com mãos levantadas para responder a pergunta de professora"
            />
          </div>
          <div className="about__section-content">
            <h3>A Nossa Missão</h3>
            <p>
              Pretendemos promover o desenvolvimento humano através da educação
              e formação com recurso a métodos sócio construtivos e técnicas
              pedagógicas diferenciadas.
            </p>
            <p>
              Criamos um ambiente propicio à aprendizagem, com profissionais
              competentes e dedicados. Recorrendo a uma estrutura física,
              pedagógica e humana.
            </p>
            <p>
              Garantimos que cada aluno tenha um apoio individual e
              especializado garantindo uma participação ativa, livre,
              responsável e autónoma, no seu processo de aprendizagem,
              defendendo que cada aluno é responsável pela sua socialização.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
