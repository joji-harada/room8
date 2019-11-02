import React from 'react';
import Welcome from './components/welcome';
import Alerts from './components/alerts';
import Feed from './components/feed';

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
        <Feed 
          userName='Garrett Jackson'
          news={[
            'Mowed the lawn yesterday @ 10:46 A.M.',
            'Announcement: Parents will be visiting this Saturday.'
        ]}/>
        <Feed 
          userName='Josh Saul'
          news={[
            'No chores have been done this week.',
            'Announcement: Debt collectors will arrive at 1:30 A.M.'
        ]}/>
      </div>
    </div>
  );
}

export default App;
