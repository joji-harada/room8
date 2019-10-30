import React from 'react';

const Alerts = ({messages}) => {
    const alertItems = messages.map((message) => (
        <p className="list-item">{message} - <a href="github.com">view details</a></p>
    ));
    return (
        <div>
            
            <div class="list is-hoverable">
            <h2 className="alerts">ALERTS</h2>
                {alertItems}
            </div>
        </div>
    )
}

export default Alerts;