import React,{createContext, useState, useLocalStorage} from 'react';
import Help from './components/Help';
import Topbar from './components/Topbar';
import './App.css';

export const AppOverallContext = createContext();

export const AppOverall = () => {
    const [gameLevel, setGameLevel] = useState("easy");
    return (
        <div className="App">
            <AppOverallContext.Provider value={{ gameLevel, setGameLevel }}>
            <Topbar />
            </AppOverallContext.Provider>
        </div>
    )
}
