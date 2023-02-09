import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import "./navbar.css";
import Head from "./Head";

const NavBar = () => {
  const [links] = useState([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Sobre",
      path: "/about",
    },
    {
      name: "Serviços",
      path: "/offers",
    },
    {
      name: "Equipa",
      path: "/team",
    },
    {
      name: "Parcerias",
      path: "/partnerships",
    },
    {
      name: "Noticias",
      path: "/News",
    },
    {
      name: "Inscrição",
      path: "/Form",
    },
  ]);

  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <Head />
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            <img src="/images/owlicon.png" alt="" />
          </Link>
          <p className="nav__subtext-one">O caminho para o conhecimento</p>
          <p className="nav__subtext-two">Aprender Mais</p>
          <ul className={`nav__links ${toggle ? "show__nav" : "hide__nav"}`}>
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}
          </ul>
          <button
            className="nav__toggle-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <MdClose /> : <GoThreeBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
