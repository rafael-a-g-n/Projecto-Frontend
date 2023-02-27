import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h2>Pré-Inscrições Abertas!</h2>
          <p className="main__header-subtitle">
            Explicações <span>|</span> Apoio ao estudo <span>|</span> Online
          </p>
          <p>
            Começa já a preparar o teu futuro. Encontram-se abertas as
            inscrições para o ano letivo corrente e 2023/2024
          </p>
          <NavLink aria-label="inscrever" to="/form" className="btn lg">
            Inscrever
          </NavLink>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src="/images/owl3.png" alt="coruja professora" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
