import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Teacher from "../../components/Teachers/Teacher";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import "./team.css";

const Team = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/api/teachers.json")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="master_wrapper">
      <Header title="Professores" image="/images/header_bg_3.jpg">
        Professores brilhantes ensinam para uma profissão. Professores
        fascinantes ensinam para a vida.
      </Header>
      <section className="teachers">
        <div className="teachers-subtitle">
          <h3>Os Nossos Professores</h3>
        </div>
        <div className="container teachers__container">
          {teachers.map(({ id, image, name, discipline, socials }) => {
            return (
              <Teacher
                key={id}
                image={image}
                name={name}
                discipline={discipline}
                socials={[
                  {
                    icon: <BsInstagram />,
                    social_name: socials[0].social_name,
                    link: socials[0].link,
                  },
                  {
                    icon: <AiOutlineTwitter />,
                    social_name: socials[1].social_name,
                    link: socials[1].link,
                  },
                  {
                    icon: <FaFacebookF />,
                    social_name: socials[2].social_name,
                    link: socials[2].link,
                  },
                  {
                    icon: <FaLinkedinIn />,
                    social_name: socials[3].social_name,
                    link: socials[3].link,
                  },
                ]}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Team;
