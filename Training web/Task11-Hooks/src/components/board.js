import hitAudio from "../assets/sounds/hihat.wav";
import missAudio from "../assets/sounds/kick.wav";
import Tile from "./tile";

export const Board = props => {
  const { board, timeUp } = props;
  const hit = new Audio(hitAudio);
  const miss = new Audio(missAudio);

  return (
    <div className="board">
      <div
        className="board__content"
        onClick={() => {
          if (!timeUp) miss.play();
        }}
      >
        {board.map((isMoleUp, index) => {
          return (
            <Tile isMoleUp={isMoleUp} index={index} hit={hit} {...props} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
