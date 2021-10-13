export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item footer__item--container">
        <button className="footer__btn" onClick="game.startGame()">
          WHACK!
        </button>
        <input
          className="footer__input"
          placeholder="Nombre"
          type="text"
        ></input>
      </div>
      <nav className="footer__item">
        <a className="footer__a footer__a--disabled">Jugar</a>|
        <a className="footer__a">Puntuación</a>
      </nav>
    </div>
  );
};

export default Footer;
