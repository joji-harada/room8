import React from 'react';
import '../style/components/alerts.sass';
import './welcome';

const titleCase = str => {
    return str
      .split('')
      .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter.toLowerCase()))
      .join('');
  };

const Feed = ({ news, userName }) => {
    const feed = news.map(each => (
        <div class='panel-block has-background-white alert-item'>
            <p>{each}</p>
        </div>
    ));

    return (
        <div class='panel'>
            <h2 class='panel-heading'>{titleCase(userName)}</h2>
            {feed}
        </div>
    )
}

export default Feed;