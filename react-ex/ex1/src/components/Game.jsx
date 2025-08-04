import { useState } from "react";


const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Donald Trump",
    },
  });

  const handleClick = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player: {
        ...prevGame.player,
        name: "Joe Biden",
      },
    }));
  };
  return (
    <div>
      <h2>Current Player: {game.player.name}</h2>
      <button onClick={handleClick}>Change Player Name</button>
    </div>
  );
};

export default Game;
