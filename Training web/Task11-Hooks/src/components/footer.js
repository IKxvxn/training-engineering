export const Footer = props => {
  const { startGame, isGamePage, setIsGamePage, player, setPlayer } = props;
  return (
    <div className="footer">
      <div
        className={`footer__item footer__item--container  ${
          !isGamePage ? "footer__item--hidden" : ""
        }`}
      >
        <button className="footer__btn" onClick={() => startGame()}>
          WHACK!
        </button>
        <input
          className="footer__input"
          value={player}
          onChange={e => {
            setPlayer(e.target.value);
          }}
          placeholder="Nombre"
          type="text"
        ></input>
      </div>
      <nav className="footer__item">
        <a
          className="footer__a"
          onClick={() => {
            setIsGamePage(!isGamePage);
          }}
        >
          {isGamePage ? "Líderes" : "Jugar"}
        </a>
      </nav>
    </div>
  );
};

export default Footer;
