import React, { useEffect, useState } from 'react';

const Countries = () => {
    // ** data amader ashtew pare nau pare
    const [countries,setCountries] = useState([]);

    // ** data load 
    useEffect(()=>{
        // ** data loader function async
        const countriesData = async ()=>{
            try {
                const response = await fetch(`https://restcountries.com/v3.1/all`);
                response.ok ? console.log('Successfully loaded') : console.log('failed');
                const data = await response.json();
                setCountries(data)
            } catch (error) {
                console.log(error)
            }
        };

        countriesData();
    },[])
    return (
        <div>
            <h1>Countries Avaiable:{countries.length}</h1>
            {
                countries?.map(country=> <p>Name: {country?.name?.common} </p> )
            }
        </div>
    );
};

export default Countries;