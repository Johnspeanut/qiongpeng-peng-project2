import React, { useContext } from 'react'
import { Letter } from './Letter';
import "./SettingsBoardHit.css"


export const SettingsBoardHit = () => {
    return (
        <div className='exampleBoard'>
            <div className='row'>
                <div className='letter' id={"correct"}>S</div>
                <div className='letter' id={"error"}>T</div>
                <div className='letter' id={"error"}>R</div>
                <div className='letter' id={"almost"}>O</div>
                <div className='letter' id={"error"}>N</div>
                <div className='letter' id={"error"}>G</div>
            </div>
        </div>
    );
}


export const SettingsBoardAlmost = () => {
    return (
        <div className='exampleBoard'>
            <div className='row'>
                <div className='letter' id={"correct"}>R</div>
                <div className='letter' id={"error"}>E</div>
                <div className='letter' id={"almost"}>S</div>
                <div className='letter' id={"error"}>U</div>
                <div className='letter' id={"error"}>M</div>
                <div className='letter' id={"error"}>E</div>
            </div>
        </div>
    );
}
