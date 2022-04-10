import React from 'react';
import '../App'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import "./Help.css";

export default function Help() {


  return (
    <div className='modalBackground'>
      {/* <button>Close it</button> */}
      {/* // tutorial: how to create close button
      // https://www.youtube.com/watch?v=ZCvemsUfwPQ */}
      <div className='modalContainer'>

        <div className='titleCloseBtn'>
          <Link to="/" className="btn btn-primary"> X </Link>
        </div>

        <p className='helpSubcontainer'>
          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Version
            </div>
            <div className='helpMainText alignright'>
              1.0.0
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>

          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Date
            </div>
            <div className='helpMainText alignright'>
              March 22, 2022
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>

          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Developer
            </div>
            <div className='helpMainText alignright'>
              Qiong(Joe) Peng
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>

          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Status
            </div>
            <div className='helpMainText alignright'>
              Master in CS align @Northeastern University
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>


          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Personal Website
            </div>
            <div className='helpMainText alignright'>
              <div className='clickablePointer' onClick={() => window.open("https://qiongpeng.net", "_blank")}>https://qiongpeng.net</div>
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>

          <p className='helpPage' >
            <div className='helpMainText alignleft'>
              Email
            </div>
            <div className='helpMainText alignright'>
              pengqiong2022fall@gmail.com
            </div>
          </p>
          <div style={{ clear: 'both' }}></div>

        </p>

        <p className='footer'>
          <Link to="/settings" className="btn btn-primary button"> Settings </Link>
          <Link to="/" className="btn btn-primary button"> Start Game </Link>
        </p>

      </div>
    </div>


  )
}
