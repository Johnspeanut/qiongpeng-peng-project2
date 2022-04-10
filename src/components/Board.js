import React, { useContext } from 'react'
import { Letter } from './Letter';
import { AppContext } from '../App';

export const Board = () => {
    const { ROW, COL } = useContext(AppContext);
    const boardComponent = [];
    for (let i = 0; i < ROW; i++) {
        const attempts = [];
        for (let j = 0; j < COL; j++) {
            attempts.push(<Letter letterPos={j} attempVal={i} />);
        }
        boardComponent.push(attempts);
    }

    return (
        <div className='board'>
            {boardComponent.map((row) => (
                <div className='row'>
                    {row.map((item) => item)}
                </div>
            ))}
        </div>
    );
}
