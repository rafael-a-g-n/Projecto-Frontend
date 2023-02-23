import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";

const Teacher = ({ image, name, discipline, socials }) => {
  return (
    <Card className="teacher">
      <div className="teacher__img">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{discipline}</p>
      <div className="teacher__socials">
        {socials.map(({ icon, social_name, link }, index) => {
          return (
            <NavLink
              key={index}
              aria-label={social_name}
              to={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {icon}
            </NavLink>
          );
        })}
      </div>
    </Card>
  );
};

export default Teacher;
