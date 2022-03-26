import React from 'react';
import './SortingVisualizer.css';
import { useState, useEffect } from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSortAlgo.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSortAlgo';
import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSortAlgo';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSortAlgo';
import { MenuItem, VStack } from '@chakra-ui/react';
import { GenerateButton } from './Button.jsx';
import { SortDropDownMenu } from './DropDownMenu.jsx';
import { AlgoModal } from './Modal.jsx';
import { MdQuiz } from "react-icons/md"

const animationSpeedMs = 7;
const primaryColor = "CornflowerBlue";
const secondaryColor = "Aquamarine";

export function SortingVisual() {
    const [array, setArray] = useState(randomArray());

    //function that controls size of array based on window event listener
    //effect invokes handleResize() function
    // useEffect(() => {
    //     function handleResize() {
    //         const numBars = array
    //         if (window.innerWidth/20<=numBars.length-1) {
    //             numBars.pop();
    //             setArray([...numBars])
                
    //         } else if (window.innerWidth / 20 >= numBars.length - 1) {
    //             numBars.push(randomIntFromInterval(10, window.innerHeight / 2))
    //             setArray([...numBars])
    //         }
    //     }
    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener("resize", handleResize)
    // }, [])
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            handleReset();
        })
    },[])

    
    const handleReset = () => {
        console.log('reset')
        setArray(randomArray());
    }
    

    const handleMergeSort = () => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMs);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeedMs);
            }
        }
    }
    const handleBubbleSort = () => {
        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][2];
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMs);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeedMs);
            }
        }
    }
        
    const handleInsertionSort = () => {
        const animations = getInsertionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][2];
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMs);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeedMs);
            }
        }
    }
                
    const handleQuickSort = () => {
        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][2];
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? primaryColor : secondaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMs);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeedMs);
            }
        }
    }     
    

    return(
        <div className='parent-container'>
            <VStack>
                <div className='feature-buttons'>
                    <GenerateButton myClass ="resetArray" handleClick = {()=>refreshPage()}>Reload Page</GenerateButton>
                    <GenerateButton myClass ="generateNewArray" handleClick = {()=>handleReset()}>Generate New Array</GenerateButton>
                    
                    <SortDropDownMenu>
                        <MenuItem onClick={() => handleMergeSort()}> Merge Sort</MenuItem>
                        <MenuItem onClick = {() => handleQuickSort()}>Quick Sort</MenuItem>
                        <MenuItem onClick = {() => handleInsertionSort()}>Insertion Sort</MenuItem>
                        <MenuItem onClick = {() => handleBubbleSort()}>Bubble Sort</MenuItem>
                    </SortDropDownMenu>
                    <AlgoModal />
                    <GenerateButton leftIcon = {<MdQuiz/>}>Test Your Knowledge</GenerateButton>
                </div>

                <div className='array-container'>
                    {array.map((value, idx) => (
                        <div className="array-bar" 
                            key={idx}
                            style={{backgroundColor: primaryColor, height: `${value}px`}}> 
                        </div>
                    ))}
                </div>
            </VStack>
        </div>
    )
}
const refreshPage = () => {
    window.location.reload(true);
}

const randomArray = () => {
    const array = [];
    for(let i = 0; i<(window.innerWidth)/16; i++){
        array.push(randomIntFromInterval(10,window.innerHeight/2));
    }
    return array;
}

//FROM: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max - min + 1)+min); 
}


export default SortingVisual;