import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";

const Partner = ({ image, name, type, description, link }) => {
  return (
    <Card className="partner">
      <div className="partner__img">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <small>{type}</small>
      <p>{description}</p>
      <div className="partner__link">
        <NavLink
          to={link}
          aria-label={name}
          target="_blank"
          rel="noreferrer noopener"
        >
          {<AiOutlineHome />}
        </NavLink>
      </div>
    </Card>
  );
};

export default Partner;
