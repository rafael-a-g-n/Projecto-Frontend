import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { VscChecklist } from "react-icons/vsc";
import { AiFillCaretRight } from "react-icons/ai";
import Card from "../components/Cards/Card";
import SectionHead from "./SectionHead";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("/api/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  if (services === undefined) return null;

  return (
    <section className="services">
      <div className="container services__container">
        <SectionHead icon={<VscChecklist />} title="Serviços" />
        <div className="services__wrapper">
          {services.map(({ id, title, info, path }) => {
            return (
              <Card className="services__service" key={id}>
                <span>
                  <ImBook />
                </span>
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
