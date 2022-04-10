import React, { useContext } from "react";
import "./ToggleSwitch3.css";
import { AppOverallContext } from '../AppOverall';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const ToggleSwitch3 = () => {
    const { gameLevel, setGameLevel } = useContext(AppOverallContext);

    return (
        <div className="toggle">

            <div className="difficultMode">
                Difficulty level:
            </div>

            <select onChange={(e) => setGameLevel(e.target.value)} className="difficultMode">
                <option defaultValue="easy" hidden>Select an Option</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <div className="difficultMode">
                <div>
                    <Link to="/" className="btn btn-primary button"> Confirm </Link>
                </div>
            </div>


        </div>
    );
};

export default ToggleSwitch3;