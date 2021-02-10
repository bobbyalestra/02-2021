import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CarbCover from './components/CarbCover/CarbCover';
import CarbCorrect from './components/CarbCorrect/CarbCorrect';
import CarbCorrectLi from './components/CarbCorrect/CarbCorrectLi';




ReactDOM.render(
  <React.StrictMode>
    <CarbCorrect />
    <CarbCover />
    <CarbCorrectLi />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);


