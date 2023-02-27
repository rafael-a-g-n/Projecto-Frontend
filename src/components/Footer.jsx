import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__article">
          <NavLink to="/" className="logo">
            <img src="/images/owlicon.png" alt="logótipo coruja" />
          </NavLink>
          <p>
            Os nossos serviços dirigem-se a todos aqueles que pretendem obter
            sucesso educativo, académico, profissional e pessoal através de todo
            o ciclo de constantes melhorias providenciado pelo nosso centro de
            estudos A Coruja.
          </p>
          <div className="footer__socials">
            <NavLink
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="facebook"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="instagram"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://twitter.com/"
              target="_blank"
              aria-label="twitter"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/"
              target="_blank"
              aria-label="youtube"
              rel="noreferrer noopener"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </div>
        <div className="footer__article">
          <h3>Navegação</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/offers">Serviços</NavLink>
          <NavLink to="/team">Equipa</NavLink>
          <NavLink to="/partnerships">Parcerias</NavLink>
          <NavLink to="/news">Noticias</NavLink>
          <NavLink to="/form">Inscrição</NavLink>
        </div>
        <div className="footer__article">
          <h3>Links Externos</h3>
          <NavLink
            to="https://www.blogger.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Blog
          </NavLink>
          <NavLink
            to="https://iceweb.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <abbr title="Instituto das Comunidades Educativas">ICE</abbr>
          </NavLink>
          <NavLink
            to="https://www.mun-setubal.pt/agrupamentos-de-escolas/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Agrupamentos Escolares
          </NavLink>
          <NavLink
            to="https://www.mun-setubal.pt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            C.M. Setúbal{" "}
          </NavLink>
        </div>
        <div className="footer__article">
          <h3>Contactos</h3>
          <address>
            <p className="footer__article-name">A Coruja</p>

            <p>
              Rua Dos Aflitos nº43 <br />
              2910-666, Setúbal <br />
              Portugal
            </p>

            <p>
              <NavLink to="mailto:acoruja@abc.pt">acoruja@abc.pt</NavLink>
            </p>
            <NavLink to="tel:+351965454684">(351) 96 5454684</NavLink>
          </address>
        </div>
      </div>
      <div className="footer__copyright">
        <p>2023 RAGN &copy; All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
