export const Tile = props => {
  const { isMoleUp, score, setScore, index, updateTile, hit } = props;
  return (
    <div className="board__hole">
      <div
        className={`board__mole ${isMoleUp ? "board__mole--up" : ""}`}
        onClick={e => {
          if (!isMoleUp) return;
          e.stopPropagation();
          updateTile(index, 0);
          setScore(score + 1);
          hit.play();
        }}
      />
    </div>
  );
};

export default Tile;
