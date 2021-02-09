import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CarbCover from './components/CarbCover/CarbCover';
import CarbCorrect from './components/CarbCorrect/CarbCorrect';




ReactDOM.render(
  <React.StrictMode>
    <CarbCorrect />
    <CarbCover />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);


