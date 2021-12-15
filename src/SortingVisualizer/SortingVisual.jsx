import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min); 
}

function GenerateNewArray(){
    const [array, setArray] = useState([])

    const resetArray = () => {
       console.log("reset array");
       const array =[];
       for(let i=0;i<320;i++){
           array.push(randomIntFromInterval(5,730));
       }
    return setArray(array);
   }
   useEffect(() => console.log("mounted"), []);
   
    return(
        <>
            <div id="button">
                <button onClick={() => resetArray()}>Generate new Array</button>
            </div>
            <div className ="array-container">
                {array.map((value, idx) => (
                    <div
                    className = "array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}>
                    </div> 
                ))} 
            </div>
        </>
    )
}
export default function SortingVisual(){
    return(
        <div>
            <GenerateNewArray/>
        </div>
    )
}
