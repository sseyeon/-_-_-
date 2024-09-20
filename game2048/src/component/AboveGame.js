import React from "react";

export default function AboveGame() {
  return (
    <div className="above-game">
      <p className="game-intro">
        Join the tiles, get to <strong>2048!</strong> <br />
        <a href="javascript:void(0)" className="how-to-play-link">
          How to play
        </a>
        ·
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYvkeNiruFGOwgH556V9LZhM9I7q5b8sP2OmJhy3fKzVVbLw/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          Give feedback
        </a>
      </p>
      <a className="restart-button">New Game</a>
    </div>
  );
}
