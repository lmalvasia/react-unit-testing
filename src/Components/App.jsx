import React from 'react';
import Summ from './Summ';
import './App.css';

const App = () => {
  return (
    <div>
      <div data-testid='title'>
        Titulo je
      </div>
      <div data-testid='body'>
        Body
        <Summ />
      </div>
      <div data-testid='footer'>
        Footer
      </div>
    </div>
  );
}

export default App;
