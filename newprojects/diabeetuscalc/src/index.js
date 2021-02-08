import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './components/Forms';
import CarbCorrect from './components/CarbCorrect';
import './components/CarbCorrect.css'



ReactDOM.render(
  <React.StrictMode>
      <CarbCorrect />
 
    <Forms />  
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);


