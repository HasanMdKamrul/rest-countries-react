import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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
            <h1 className='text-warning'>Countries Avaiable:{countries.length}</h1>
            <div className='countries-container text-primary'>
                {
                    countries?.map(country=> <Country key={country.cca3} country={country}></Country> )
                }
                
            </div>
        </div>
    );
};

export default Countries;