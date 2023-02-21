const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="" />
        </div>
        <div className="header__content">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
