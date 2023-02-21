import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Cards/Card";

import "./offers.css";

const Offers = () => {
  const [offers] = useState([
    {
      id: 1,
      img: "/images/servico_1ciclo.jpg",
      name: "Ensino Básico (1º Ciclo)",
      desc: "Serviços",
      features: [
        { feature: "Apoio ao estudo" },
        { feature: "Estudo acompanhado" },
        { feature: "Métodos e técnicas de estudo" },
        { feature: "Preparação provas de aferição" },
        { feature: "Acompanhamento psicopedagógico" },
        { feature: "Programas de atenção e concentração" },
        { feature: "Programas dificuldade de aprendizagem" },
        { feature: "Programas dislexia, terapia da fala" },
        { feature: "Programas défice de atenção" },
        { feature: "Programas hiperatividade" },
      ],
    },
    {
      id: 2,
      img: "/images/servico_2_3ciclo.jpg",
      name: "2º e 3º Ciclo",
      desc: "Serviços",
      features: [
        { feature: "Explicações" },
        { feature: "Apoio ao estudo e estudo acompanhado" },
        { feature: "Métodos e técnicas de estudo" },
        { feature: "Preparação para Provas Aferição" },
        { feature: "Preparação para Provas Nacionais" },
        { feature: "Apoio em grupo e individual" },
        { feature: "Programas de recuperação" },
        { feature: "Orientação vocacional" },
        { feature: "Acompanhamento psicopedagógico" },
        { feature: "Programas de atenção e concentração" },
        { feature: "Programas dificuldade de aprendizagem" },
        { feature: "Programas dislexia, terapia da fala" },
        { feature: "Programas défice de atenção" },
      ],
    },
    {
      id: 3,
      img: "/images/servico_secundario.jpg",
      name: "Ensino Secundário",
      desc: "Serviços",
      features: [
        { feature: "Explicações" },
        { feature: "Preparação para exames" },
        { feature: "Apoio em grupo ou individual" },
        { feature: "Programas de recuperação" },
      ],
    },
    {
      id: 4,
      img: "/images/servico_rvcc.jpg",
      name: "RVCC",
      desc: "Serviços",
      features: [
        { feature: "Explicações", available: true },
        { feature: "Validação de competências", available: true },
        { feature: "Auxilio na elaboração portefólio", available: true },
        { feature: "Certificação profissional ", available: true },
      ],
    },
  ]);

  return (
    <div className="master_wrapper">
      <Header title="Serviços" image="/images/header_bg_2.jpg">
        No mundo de hoje pessoas não compram bens e serviços. Elas compram
        relacionamentos, histórias e magia.
      </Header>
      <section className="offers">
        <div className="offers-subtitle">
          <h2> Apoio Escolar</h2>
        </div>
        <div className="container offers__container">
          {offers.map(({ id, name, img, desc, features }) => {
            return (
              <Card key={id} className="offer">
                <div className="offer-image">
                  <img src={img} alt={name} />
                </div>
                <h4>{name}</h4>
                <h5>{desc}</h5>
                {features.map(({ feature }, index) => {
                  return <p key={index}>{feature}</p>;
                })}
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Offers;
