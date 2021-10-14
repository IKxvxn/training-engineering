export const Header = props => {
  const { score } = props;
  return (
    <div className="header">
      <h3 className="header__text">Whack-a-mole!</h3>
      <h3 className="header__text">Score: {score}</h3>
    </div>
  );
};

export default Header;
