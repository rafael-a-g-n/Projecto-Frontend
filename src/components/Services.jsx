import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi";
import { AiFillCaretRight } from "react-icons/ai";
import Card from "../components/Cards/Card";
import SectionHead from "./SectionHead";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      icon: <SiBookstack />,
      title: "Primeiro Ciclo",
      info: "Acompanhamento na primeira etapa escolar até ao quarto ano",
      path: "/offers",
    },
    {
      id: 2,
      icon: <SiBookstack />,
      title: "Segundo e Terceiro Ciclo",
      info: "Todo o percurso e aconselhamento para a definição do Secundário ",
      path: "/offers",
    },
    {
      id: 3,
      icon: <SiBookstack />,
      title: "Ensino Secundário",
      info: "Acompanhamento e preparação para a vida académica",
      path: "/offers",
    },
    {
      id: 4,
      icon: <SiBookstack />,
      title: "Programa RVCC",
      info: "Reconhecimento, Validação e Certificação de competências adquiridas",
      path: "/offers",
    },
  ]);

  return (
    <section className="services">
      <div className="container services__container">
        <SectionHead icon={<HiAcademicCap />} title="Serviços" />
        <div className="services__wrapper">
          {services.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="services__service" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <NavLink to={path} className="btn sm">
                  Saber Mais <AiFillCaretRight />
                </NavLink>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;