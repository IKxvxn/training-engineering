export const LeadersTable = props => {
  const { topPlayers } = props;
  return (
    <div className="leaders">
      <div className="leaders__table">
        <h2 className="leaders__title">Mejores Jugadores</h2>
        <div className="leaders__element">
          <h3 className="leaders__data">Nombre</h3>{" "}
          <h3 className="leaders__data">Score</h3>
        </div>
        {topPlayers.map(player => {
          return (
            <div className="leaders__element">
              <h3 className="leaders__data">{player.player}</h3>{" "}
              <span className="leaders__separator" />
              <h3 className="leaders__data">{player.score}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeadersTable;
