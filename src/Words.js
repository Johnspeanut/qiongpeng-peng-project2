import wordBankEasy from './wordle-bank.txt';
import wordBankMedium from './wordle-bank6.txt';
import wordBankHard from './wordle-bank7.txt';

export const boardDefault = (ROW, COL) => {
    let matrix = [];
    for(let i = 0; i < ROW; i++){
        let vector = [];
        for(let j = 0; j < COL; j++){
            vector.push(" ");
        }
        matrix.push(vector);
    }
    return matrix;
};


export const generateWordSet = async (gameLevel) => {
    let wordSet;
    let todaysWord;
    await fetch(gameLevel==="easy"?wordBankEasy:gameLevel==="medium"?wordBankMedium:gameLevel==="hard"?wordBankHard:wordBankEasy).then((response) => response.text()).then((result) => {
        const wordArr = gameLevel === "easy"?result.split("\r\n"):result.split(" ");
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr);
    });

    return { wordSet, todaysWord };
};