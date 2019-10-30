import React from 'react';

const titleCase = (str) => {
    return str.split('').map((letter, i) => (
        (i === 0) ?
            letter.toUpperCase() :
            letter.toLowerCase()
    )).join("");
}

const Welcome = ({name}) => (
    <h1>Welcome {titleCase(name)}</h1>
)

export default Welcome;