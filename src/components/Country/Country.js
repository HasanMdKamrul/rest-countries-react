import React from 'react';
import './Country.css';

const Country = ({name,population,area}) => {
    return (
        <div className='country'>
            <h1>Country Name:{name}</h1>
            <h4>Area:{area}</h4>
            <small>Population:{population}</small>
        </div>
    );
};

export default Country;<h1>My country</h1>