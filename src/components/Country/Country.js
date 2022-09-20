import React from 'react';
import './Country.css';

const Country = ({country:{name:{common},area,population,region}}) => {
   
    return (
        <div className='country'>
            <h1>Country Name:{common}</h1>
            <h4>Area:{area}</h4>
            <small>Population:{population}</small>
            <p>Region:{region}</p>
        </div>
    );
};

export default Country;