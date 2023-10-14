import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Countries = () => {
    const [data, setData] = useState([]);
    const [sortData, setSortData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    const [rangeValue, setRangeValue] = useState(30);

    const [selectedRadio, setSelectedRadio] = useState("");
    const radio = [ "Africa", "America", "Asia", "Europe", "Oceania" ];

    useEffect(() => {
        if(playOnce) {
            axios
            .get(
                "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
            )
            .then(res => {
                setData(res.data);
                setPlayOnce(false);
                console.log(res.data);
            });
        }
        

    //trie nos country
    const sortedCountry = () => {
        const countryObject = Object.keys(data).map(i => data[i]);
        const sortedArray = countryObject.sort((a, b) => {
            return b.population - a.population;
        })

        sortedArray.length = rangeValue;
        setSortData(sortedArray)
        // console.log(sortedArray);
    };

    sortedCountry();
}, [data,rangeValue, playOnce]);


// rendu 
    return (
        <div className='countries'>

        <div className='sort_container'>
            <input type="range" min="1" max="250" value={rangeValue} 
            onChange={(e) => setRangeValue(e.target.value)} />


        <ul>

      {radio.map((radio) => {
        return( <li key={radio}>
        <input type="radio" 
        value={radio} 
        id={radio} 
        checked= {radio === selectedRadio} 
        onChange={ (e) => setSelectedRadio(e.target.value) } /> 

        <label htmlFor= {radio}> {radio} </label>
        </li>
        );
      })}  
        
      </ul>

        </div>
        
        <div className='cancel'>
        {
            selectedRadio && 
            <h5 onClick={() =>setSelectedRadio("")}>Annuler la recherche</h5>
        }            
        </div>

        <div className='countries_liste'>
            {sortData
            .filter((country) => country.region.includes(selectedRadio))
            .map(country => (

                <Card key={country.name} country={country} />
            )
            )}
        </div>
        </div>
    );
};

export default Countries;