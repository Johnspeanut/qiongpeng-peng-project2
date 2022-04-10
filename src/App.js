import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import './App.css';
import React, { useState, createContext, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './components/GameOver';
import { MdHelpOutline, MdSettings } from "react-icons/md";
import { IconContext } from 'react-icons/lib';
import Help from './components/Help'
import { AppOverallContext } from './AppOverall';
import useLocalStorage from './components/useLocalStorage';



export const AppContext = createContext();

function App() {
  const { gameLevel, setGameLevel } = useContext(AppOverallContext);
  const [ROW, COL] = gameLevel === "easy" ? [7, 5] : gameLevel === "medium" ? [6, 6] : gameLevel === "hard" ? [5, 7] : [7, 5];
  const [board, setBoard] = useState(boardDefault(ROW, COL));
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetter] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });
  const [correctWord, setCorrectWord] = useState("");

  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem("count")));


  // const savedLocalData = localStorage.getItem("localStorageKey");
  // const data = savedLocalData?JSON.parse(savedLocalData):correctWord;
  // const [data, setData] = localStorage.getItem("localStorageKey")?JSON.parse(localStorage.getItem("localStorageKey")):{};
  // const [todos, setTodos] = useLocalStorage("todos", {})
  // setTodos({storeBoardKey:board, currAttempKey:currAttempt, correctWordKey:correctWord, disableLetterKey:disabledLetters, gameLevelKey:gameLevel});

  useEffect(() => {
    generateWordSet(gameLevel).then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      console.log(words.todaysWord);
      console.log(gameLevel);
      console.log(ROW);
      console.log(COL);
      console.log(board);

      setCount(JSON.parse(window.localStorage.getItem("count")));
      // setBoard(todos.storeBoardKey);
      // setCurrAttempt(todos.currAttempKey);
      // setGameLevel(todos.gameLevelKey);
      // setCorrectWord(todos.correctWordKey);
      // setDisabledLetter(todos.disableLetterKey);
    });
  }, [])


  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);




  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > COL - 1) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== COL) return;
    let currWord = "";
    for (let i = 0; i < COL; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      console.log(wordSet);
      alert("Word not Found");
    }
    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt >= ROW - 1) {
      setGameOver({ gameOver: true, guessedWord: false });
    }

  }


  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, correctWord, gameOver, setGameOver, disabledLetters, setDisabledLetter, ROW, COL }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
        <h1>Count:{count}</h1>
        <button onClick={()=> setCount(count+1)}></button>
      </AppContext.Provider>
    </div>
  );
}

export default App;
