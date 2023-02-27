import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Cards/Card";

import "./offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/api/features.json")
      .then((response) => response.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div className="master_wrapper">
      <Header title="Serviços" image="/images/header_bg_2.jpg">
        No mundo de hoje pessoas não compram bens e serviços. Elas compram
        relacionamentos, histórias e magia.
      </Header>
      <section className="offers">
        <div className="offers-subtitle">
          <h3> Apoio Escolar</h3>
        </div>
        <div className="container offers__container">
          {offers.map(({ id, name, img, desc, features }) => {
            return (
              <Card key={id} className="offer">
                <div className="offer-image">
                  <img src={img} alt={name} />
                </div>
                <h4>{name}</h4>
                <p className="offer-desc">{desc}</p>
                {features.map(({ feature }, index) => {
                  return (
                    <p className="offer-feature" key={index}>
                      {feature}
                    </p>
                  );
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
