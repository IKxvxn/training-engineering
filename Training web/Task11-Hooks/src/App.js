import { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Board from "./components/board";
import Footer from "./components/footer";
import LeadersTable from "./components/leadersTable";
import { sleep, randomNumber } from "./utilities/utilities";

function App() {
  const moleTimeRange = [200, 1000];
  const [isGamePage, setIsGamePage] = useState(true);
  const [score, setScore] = useState(0);
  const [lastTile, setLastTile] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(0));
  const [player, setPlayer] = useState("");
  const [topPlayers, setTopPlayers] = useState([]);

  const timeUp = useRef(true);

  useEffect(() => {
    if (timeUp.current) updateTopPlayers();
  }, [timeUp.current]);

  const updateTile = (tileIdx, value) => {
    board[tileIdx] = value;
    setBoard([...board]);
  };

  const randomTile = () => {
    const idx = Math.floor(Math.random() * board.length);
    if (idx === lastTile) return randomTile();
    setLastTile(idx);
    return idx;
  };

  const moleUp = async () => {
    while (!timeUp.current) {
      const time = randomNumber(moleTimeRange[0], moleTimeRange[1]);
      const tileIdx = randomTile();
      updateTile(tileIdx, 1);
      await sleep(time);
      updateTile(tileIdx, 0);
    }
  };

  const updateTopPlayers = () => {
    let actualP = !player ? "Anónimo" : player;
    if (score === 0) return;
    if (topPlayers.length < 5) {
      topPlayers.push({ player: actualP, score: score });
    } else if (topPlayers[topPlayers.length - 1].score <= score) {
      topPlayers[topPlayers.length - 1] = { player: actualP, score: score };
    }
    setTopPlayers(
      topPlayers.sort((playerA, playerB) => playerB.score - playerA.score)
    );
  };

  const startGame = async () => {
    if (!timeUp.current) return;
    setScore(0);
    timeUp.current = false;
    moleUp();
    await sleep(10000);
    timeUp.current = true;
  };

  return (
    <>
      <Header score={score} />
      {isGamePage ? (
        <Board
          setScore={setScore}
          timeUp={timeUp.current}
          score={score}
          board={board}
          updateTile={updateTile}
        />
      ) : (
        <LeadersTable topPlayers={topPlayers} />
      )}
      <Footer
        startGame={startGame}
        isGamePage={isGamePage}
        setIsGamePage={setIsGamePage}
        player={player}
        setPlayer={setPlayer}
      />
    </>
  );
}

export default App;
