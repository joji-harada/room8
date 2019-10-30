import React from 'react';
import Welcome from './components/welcome'
import Alerts from './components/alerts'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container centered'>
        <Welcome name='bob'/>
        <Alerts messages={['clean the dirty dishes', 'mow the overgrown lawn', 'pay your utility bill']}/>
      </div>
    </div>
  );
}

export default App;
