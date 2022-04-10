import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

export const Letter = ({ letterPos, attempVal }) => {
  const { board, correctWord, currAttempt, setDisabledLetter } = useContext(AppContext);
  const letter = board[attempVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState = currAttempt.attempt > attempVal && (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetter((prev) => [...prev, letter]);
    }

  }, [currAttempt.attempt]);

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}
