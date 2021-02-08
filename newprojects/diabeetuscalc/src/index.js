import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './components/Forms';
import carbCorrect from './components/CarbCorrect';
import Carbinput from './components/CarbCorrect';


ReactDOM.render(
  <React.StrictMode>
      <carbCorrect />
    <Carbinput />
    <Forms />  
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);


