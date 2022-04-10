import React, { useContext } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { AppOverallContext } from '../AppOverall';
import ToggleSwitch3 from './ToggleSwitch3';
import './Settings.css';
import { SettingsBoardHit, SettingsBoardAlmost } from './SettingsBoardHit';
import { Letter } from './Letter';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

export default function Settings() {
    const { gameLevel, setGameLevel } = useContext(AppOverallContext);
    return (
        <div className='modalBackground'>
            {/* <button>Close it</button> */}
            {/* // tutorial: how to create close button
// https://www.youtube.com/watch?v=ZCvemsUfwPQ */}
            <div className='modalContainer'>

                <div className='titleCloseBtn'>
                    <Link to="/" className="btn btn-primary"> X </Link>
                </div>

                <div className='howtoplaytitle'>
                    <h2>HOW TO PLAY</h2>
                </div>


                <div className='settingPage'>
                    <div className='helpMainText'>
                        <p>You can select one of three difficulties:</p>
                        <ul>
                            <li>Easy:use vaid 5-letter words and be given 7 tries.</li>
                            <li>Medium: use valid 6-letter words and be given 6 tries.</li>
                            <li>Hard:use valid 7-letter words and have 5 opportunities.</li>
                        </ul>
                        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.Hit the enter to submit</p>
                        <p>A new WORDLE will be available each game</p>
                        <p></p>
                    </div>

                    <div className='helpMainText exampletitle'>
                        <p>Examples</p>
                    </div>

                    <div>
                        <SettingsBoardHit />
                    </div>
                    <p className='helpMainText'>
                        The letter S is in the word and in the correct spot. The letter O is in the word but in the wrong spot. Other else letters are not in the word.
                    </p>

                    <div className='footer'>
                        <ToggleSwitch3 />
                    </div>
                </div>


            </div>
        </div>

    )
}
