import React from 'react';
import Welcome from './components/welcome';
import Alerts from './components/alerts';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='app-box box has-background-link'>
        <Welcome name='bob' />
        <Alerts
          messages={[
            'Clean the dirty dishes',
            'Mow the overgrown lawn',
            'Pay your utility bill'
          ]}
        />
      </div>
    </div>
  );
}

export default App;
