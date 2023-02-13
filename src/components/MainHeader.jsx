import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3>Pré-Inscrições Abertas!</h3>
          <h4>
            Explicações <span>|</span> Apoio ao estudo <span>|</span> Online
          </h4>
          <p>
            Começa já a preparar o teu futuro. Encontram-se abertas as
            inscrições para o ano letivo corrente e 2023/2024
          </p>
          <NavLink to="/form" className="btn lg">
            Inscrever
          </NavLink>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src="/images/owl.png" alt="coruja" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
