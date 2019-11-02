import React from 'react';
import '../style/components/alerts.sass';

const Alerts = ({ messages }) => {
  const alertItems = messages.map(message => (
    <div class='panel-block has-background-white alert-item'>
      <p>{message}</p>
      <div>
        <button className='button is-info'>Details</button>
      </div>
    </div>
  ));
  return (
    <nav class='panel'>
      <p class='panel-heading'>Alerts</p>
      {alertItems}
    </nav>
  );
};

export default Alerts;
