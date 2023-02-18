import React from "react";
import { NavLink } from "react-router-dom";
import "./head.css";

const Head = () => {
  return (
    <section className="head container">
      <div className="head__container">
        <div className="head__title">
          <h1>A Coruja</h1>
          <p>Centro de estudos & preparação</p>
        </div>
        <div className="head__links">
          <NavLink
            to="https://www.facebook.com/"
            aria-label="facebook"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook-f icon"></i>
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            aria-label="instagram"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-instagram icon"></i>
          </NavLink>
          <NavLink
            to="https://twitter.com/"
            aria-label="twitter"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter icon"></i>
          </NavLink>
          <NavLink
            to="https://www.youtube.com/"
            aria-label="youtube"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-youtube icon"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Head;
