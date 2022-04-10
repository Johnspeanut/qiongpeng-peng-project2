import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Help from './Help';
import App from '../App';
import Settings from './Settings';
import '../App.css';
import { MdHelpOutline, MdSettings } from "react-icons/md";
import { IconContext } from 'react-icons/lib';


export default function Topbar() {
  // close help state setting
  const [closeModal, setCloseModal] = useState(false);
  return (
    <IconContext.Provider value={{ color: "white", size: "1.8em" }}>
      <Router>
        <nav>
          <div className='header'>
            <Link to="/help" className='leftIcon'><MdHelpOutline /></Link>
            <Link to="/"><h1>Wordle</h1></Link>
            <Link to="/settings" className='rightIcon'><MdSettings /></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<App />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </Router>
    </IconContext.Provider>
  )
}
