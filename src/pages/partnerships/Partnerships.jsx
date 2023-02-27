import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Partner from "../../components/Partners/Partner";
import "./partnerships.css";

const Partnerships = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("/api/partners.json")
      .then((response) => response.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <div className="master_wrapper">
      <Header title="Parcerias" image="/images/header_bg_4.jpg">
        As pessoas unem-se por um propósito, e essa parceria é baseada na
        necessidade de cooperar para alcançá-lo.
      </Header>
      <section className="partners">
        <div className="partners-subtitle">
          <h3>Os Nossos Parceiros</h3>
        </div>
        <div className="container partners__container">
          {partners.map(({ id, image, name, type, description, link }) => {
            return (
              <Partner
                key={id}
                image={image}
                name={name}
                type={type}
                description={description}
                link={link}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
