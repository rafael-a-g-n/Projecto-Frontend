import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import "./navbar.css";
import Head from "./Head";

const NavBar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("/api/links.json")
      .then((response) => response.json())
      .then((data) => setLinks(data));
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle((state) => !state);

  return (
    <div className="fixed">
      <Head />
      <nav className="nav">
        <div className="container nav__container">
          <NavLink to="/" className="nav__logo">
            <img src="/images/owlicon.png" alt="a coruja logo" />
          </NavLink>
          <p className="nav__subtext-one">O caminho para o conhecimento</p>
          <p className="nav__subtext-two">Aprender Mais</p>
          <ul className={`nav__links ${toggle ? "show__nav" : "hide__nav"}`}>
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    onClick={toggler}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="nav__toggle-btn" onClick={toggler}>
            {toggle ? (
              <MdClose aria-label="fechar menu" />
            ) : (
              <GoThreeBars aria-label="abrir menu" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
