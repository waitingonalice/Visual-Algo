import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSortAlgo.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSortAlgo';

const animationSpeedMs =3;

const numberOfArrayBars = 100;

const primaryColor = "orange";

const secondaryColor = 'turquoise';

const tertiaryColor = 'red';


function GenerateNewArray(){
    const[array, setArray] = useState(randomArray());

    useEffect(() => console.log("mounted"),[]);

//FROM: https://github.com/waitingonalice/Sorting-Visualizer-Tutorial/blob/master/src/sortingAlgorithms/sortingAlgorithms.js 
    const handleMergeSort = () => {  
        const animations = getMergeSortAnimations(array);
        for(let i = 0; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){     
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? tertiaryColor : secondaryColor;
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
        const handleBubbleSort = () => {  
            const animations = getBubbleSortAnimations(array);
            for(let i = 0; i<animations.length;i++){
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = animations[i][2];
                if(isColorChange){     
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i%2 === 0 ? tertiaryColor : secondaryColor;
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

        const handleReset = () => {
            console.log('reset')
            setArray(randomArray());

        }
      
    return(
        <div>
            <div className = "array-container">
                <div className='buttons'>   
                <button onClick = {() => handleReset()}>Generate new Array</button>
                <button onClick = {() => handleMergeSort()}>Merge Sort</button>
                <button>Quick Sort</button>
                <button>Insertion Sort</button>
                <button onClick = {() => handleBubbleSort()}>Bubble Sort</button>
                </div>
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