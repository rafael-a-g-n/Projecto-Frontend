import React from "react";
import { NavLink } from "react-router-dom";
import "./head.css";

const Head = () => {
  return (
    <section className="head">
      <div className="container head__container">
        <div className="head__title">
          <h1>A Coruja</h1>
          <p>Centro de estudos & preparação</p>
        </div>
        <div className="head__links">
          <NavLink to="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-f icon"></i>
          </NavLink>
          <NavLink to="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram icon"></i>
          </NavLink>
          <NavLink to="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter icon"></i>
          </NavLink>
          <NavLink to="https://www.youtube.com/" target="_blank">
            <i className="fab fa-youtube icon"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Head;
