import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import { GiBookAura, GiPuzzle } from "react-icons/gi";
import { FaStackExchange, FaHandshake } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import Card from "./Cards/Card";

const Values = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("/api/values.json")
      .then((response) => response.json())
      .then((data) => setValues(data));
  }, []);

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
            {values.map(({ id, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>
                    {id === 1 ? (
                      <FaHandshake />
                    ) : null || id === 2 ? (
                      <FaStackExchange />
                    ) : null || id === 3 ? (
                      <GiPuzzle />
                    ) : null || id === 4 ? (
                      <MdOutlineFamilyRestroom />
                    ) : null}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
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
