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
