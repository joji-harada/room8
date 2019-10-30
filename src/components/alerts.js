import React from 'react';

const Alerts = ({messages}) => {
    const alertItems = messages.map((message) => (
        <a href="github.com" className="list-item">{message}</a>
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