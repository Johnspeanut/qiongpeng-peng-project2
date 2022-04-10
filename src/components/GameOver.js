import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className='gameOver'>
      <h1>{gameOver.guessedWord ? "You correctly guessed" : "You failed"}</h1>
      <h2>The correct word is:{correctWord}</h2>
      {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attemps</h3>)}
    </div>
  );
}


