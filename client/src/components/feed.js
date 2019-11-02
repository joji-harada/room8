import React from 'react';
import '../style/components/alerts.sass';

const Feed = ({ news, userName }) => {
    const feed = news.map(each => (
        <div class='panel-block has-background-white alert-item'>
            <p>{each}</p>
        </div>
    ));

    return (
        <div class='panel'>
            <h2 class='panel-heading'>{userName}</h2>
            {feed}
        </div>
    )
}

export default Feed;