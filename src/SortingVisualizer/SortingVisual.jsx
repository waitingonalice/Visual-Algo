import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSortAlgo.js';

const animationSpeedMs = 5;

const numberOfArrayBars = 300;

const primaryColor = "orange";

const secondaryColor = 'blue';


function GenerateNewArray(){
    const[array, setArray] = useState(randomArray());

    useEffect(() => console.log("mounted"),[]);

    const handleReset = () => {
        console.log('reset')
        setArray(randomArray());
    }

    const handleMergeSort = () => {  
        const animations = getMergeSortAnimations(array);
        for(let i = 0; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){     
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? primaryColor : secondaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMs);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeedMs);
            }
        }}
      
    return(
        <div>
            <div>
                <button onClick = {() => handleReset()}>Generate new Array</button>
                <button onClick = {() => handleMergeSort()}>Merge Sort</button>
                <button>Quick Sort</button>
                <button>Insertion Sort</button>
                <button>Bubble Sort</button>
            </div>
            <div className = "array-container">
                {array.map((value, idx) => (
                    <div className = "array-bar" 
                    key={idx}
                    style={{backgroundColor: primaryColor, height: `${value}px`}}> 
                    </div>
                ))}
            </div>
                
        </div>
    )
}

const randomArray = () => {
    const array = [];
    for(let i = 0; i<numberOfArrayBars; i++){
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