import SectionHead from "./SectionHead";
import { GiBookAura, GiPuzzle } from "react-icons/gi";
import { FaStackExchange, FaHandshake } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { useState } from "react";
import Card from "./Cards/Card";

const Values = () => {
  const [values] = useState([
    {
      id: 1,
      icon: <FaHandshake />,
      title: "Respeito",
      desc: "Respeitamos a individualidade de cada aluno, os seus sonhos e os seus limites. Só assim podemos ajudá-la a desenvolver todo o seu potencial",
    },
    {
      id: 2,
      icon: <FaStackExchange />,
      title: "Autonomia",
      desc: "Respondemos às necessidades dos nossos alunos e damos-lhes ferramentas para que se tornem autónomos, capazes de resolver e responder a desafios com confiança e vontade de aprender",
    },
    {
      id: 3,
      icon: <GiPuzzle />,
      title: "Colaboração",
      desc: "Não há dois indivíduos iguais! O nosso trabalho é construido no dia a dia com base no diálogo e colaboração com a família e a escola",
    },
    {
      id: 4,
      icon: <MdOutlineFamilyRestroom />,
      title: "Ambiente Familiar",
      desc: "Os nossos alunos consideram-nos parte da familia. Por isso, o nosso trabalho gira em torno de 3 eixos e de uma boa comunicação entre eles : A Coruja - Familia - Escola",
    },
  ]);

  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img
              src="/images/student.jpeg"
              alt="jovem a estudar numa secretária"
            />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiBookAura />} title="Valores" />
          <p>
            Seguimos um conjunto de valores indispensáveis para o
            desenvolvimento dos alunos e dos nossos profissionais.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
