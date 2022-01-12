import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSortAlgo.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSortAlgo';
import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSortAlgo';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSortAlgo';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Box, Center, HStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const animationSpeedMs = 8;
const primaryColor = "CornflowerBlue";
const secondaryColor = "MediumSeaGreen";

export function SortingVisual(){
    const[array, setArray] = useState(randomArray());

    useEffect(() => console.log("mounted"), []);

    const handleResize = () => { 
        //handles the change of the array bars when window is resized
    }


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
        const handleBubbleSort = () => {  
            const animations = getBubbleSortAnimations(array);
            for(let i = 0; i<animations.length;i++){
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = animations[i][2];
                if(isColorChange){     
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i%2 === 0 ? primaryColor : secondaryColor;
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
        
            const handleInsertionSort = () => {  
                const animations = getInsertionSortAnimations(array);
                for(let i = 0; i<animations.length;i++){
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const isColorChange = animations[i][2];
                    if(isColorChange){     
                        const [barOneIdx, barTwoIdx] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i%2 === 0 ? primaryColor : secondaryColor;
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
                
                const handleQuickSort = () => {  
                const animations = getQuickSortAnimations(array);
                for(let i = 0; i<animations.length;i++){
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const isColorChange = animations[i][2];
                    if(isColorChange){     
                        const [barOneIdx, barTwoIdx] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i%3 === 0 ? secondaryColor : primaryColor;
                        setTimeout(() => {
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        }, i * animationSpeedMs);
                    }else {
                        setTimeout(() => {
                            const [barOneIdx,newHeight] = animations[i];
                            const barOneStyle = arrayBars[barOneIdx].style;
                            barOneStyle.height = `${newHeight}px`;
                        }, i * animationSpeedMs);
                    } 
                }}

        
  
//style section    
    const GenerateNewArrayButton = () => {
        const refreshPage = () => {
            window.location.reload(true);
        }
        const handleReset = () => {
            console.log('reset')
            setArray(randomArray());
        }
        return (
            <HStack spacing = '40px' >
                <Box>
                    <Button colorScheme='teal' size='md'
                        onClick={() => handleReset()}>
                        Generate new Array
                    </Button>
                </Box>
               
                <Box>
                    <Button colorScheme='teal' size='md'
                        onClick={() => refreshPage()}>
                        Reset Array
                    </Button>
                </Box>
            </HStack>
        ); 
    }
    
    const DropDownMenu = () => {
        return (
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme = 'teal'>
                    Sorting Algorithms
                </MenuButton>
                <MenuList>
                    <MenuItem onClick = {() => handleMergeSort()}>Merge Sort</MenuItem>
                    <MenuItem onClick = {() => handleQuickSort()}>Quick Sort</MenuItem>
                    <MenuItem onClick = {() => handleInsertionSort()}>Insertion Sort</MenuItem>
                    <MenuItem onClick = {() => handleBubbleSort()}>Bubble Sort</MenuItem>
                </MenuList>
            </Menu>
    
        )
    }

    return(
        <Box>
            <Center>
                <HStack spacing = '40px'>
                    <Box> 
                        <GenerateNewArrayButton/>
                    </Box>
                    <Box>
                        <DropDownMenu>
                        </DropDownMenu>
                    </Box>
                </HStack>
            </Center>

            <Center>
                <Box className="array-container">
                    {array.map((value, idx) => (
                        <Box className="array-bar" 
                            key={idx}
                            style={{backgroundColor: primaryColor, height: `${value}px`}}> 
                        </Box>
                    ))}
                </Box>
            </Center>
            
       </Box>

    )
}

const randomArray = () => {
    const array = [];
    for(let i = 0; i<(window.innerWidth-350)/30; i++){
        array.push(randomIntFromInterval(10,window.innerHeight/2));
    }
    return array;
}

//FROM: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max - min + 1)+min); 
}

export default SortingVisual;