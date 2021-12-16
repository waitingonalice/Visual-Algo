import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';

function GenerateNewArray(){
    const[array, setArray] = useState(randomArray());

    useEffect(() => console.log("mounted"),[]);

    const handleReset = () => {
        console.log('reset')
        setArray(randomArray());
    }

    return(
        <div>
            <div>
                <button onClick = {() => handleReset()}>Generate new Array</button>
            </div>
            <div className = "array-container">
                {array.map((value, idx) => (
                    <div className = "array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}> 
                    </div>
                ))}
            </div>
                
        </div>
    )
}

const randomArray = () => {
    const array = [];
    for(let i = 0; i<330; i++){
        array.push(randomIntFromInterval(5,730));
    }
    return array;
}

//FROM: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min); 
}

export default function SortingVisual(){
    return( 
        <>
            <GenerateNewArray></GenerateNewArray>
        </>
    );
}