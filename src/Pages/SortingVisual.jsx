import React from "react";
import "./SortingVisualizer.css";
import { useState, useEffect } from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/mergeSortAlgo.js";
import { getBubbleSortAnimations } from "../SortingAlgorithms/bubbleSortAlgo";
import { getInsertionSortAnimations } from "../SortingAlgorithms/insertionSortAlgo";
import { getQuickSortAnimations } from "../SortingAlgorithms/quickSortAlgo";
import {
    MenuItem,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    Button,
    Select,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GenerateButton } from "../components/Button.jsx";
import { AlgoModal } from "../components/Modal.jsx";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

// const animationSpeedMs = 50;
const primaryColor = "CornflowerBlue";
const secondaryColor = "Aquamarine";

function SortingVisual() {
    const [array, setArray] = useState(randomArray());
    const [trigger, setTrigger] = useState(false);
    const [animationSpeedMs, setAnimationSpeedMs] = useState(5);

    useEffect(() => {
        window.addEventListener("resize", () => {
            handleReset();
        });
    }, []);

    useEffect(() => {
        if (trigger) {
            setTimeout(() => {
                setTrigger(false);
            }, 10000);
        }
    }, [trigger]);

    const handleReset = () => {
        setTrigger(false);
        setArray(randomArray());
    };

    //handleMergeSort() from: https://www.youtube.com/watch?v=pFXYym4Wbkc&t=2137s
    const handleMergeSort = () => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
    };
    const handleBubbleSort = () => {
        setTrigger(true);
        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
    };

    const handleInsertionSort = () => {
        setTrigger(true);
        const animations = getInsertionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
    };

    const handleQuickSort = () => {
        setTrigger(true);
        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
    };

    return (
        <VStack>
            <div className="title">Visual Algo</div>
            <div className="feature-buttons">
                <GenerateButton
                    myClass="resetArray"
                    handleClick={() => handleRefreshPage()}
                >
                    Reload Page
                </GenerateButton>
                <GenerateButton
                    myClass="generateNewArray"
                    handleClick={() => handleReset()}
                >
                    Generate New Array
                </GenerateButton>

                <Menu>
                    <MenuButton
                        id="MenuButton"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        colorScheme="gray"
                        size={"sm"}
                        disabled={trigger}
                    >
                        Algorithms
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => handleQuickSort()}>
                            Quick Sort
                        </MenuItem>
                        <MenuItem onClick={() => handleInsertionSort()}>
                            Insertion Sort
                        </MenuItem>
                        <MenuItem onClick={() => handleBubbleSort()}>
                            Bubble Sort
                        </MenuItem>
                        <MenuItem onClick={() => handleMergeSort()}>
                            Merge Sort
                        </MenuItem>
                    </MenuList>
                </Menu>

                <div className="select-speed">
                    <Select
                        size={"sm"}
                        placeholder={"Speed"}
                        variant="filled"
                        isDisabled={trigger}
                        onChange={(e) => setAnimationSpeedMs(e.target.value)}
                    >
                        <option value={5}>5ms</option>
                        <option value={50}>50ms</option>
                        <option value={100}>100ms</option>
                    </Select>
                </div>

                <AlgoModal />
                <Link to="/quiz">
                    <GenerateButton leftIcon={<MdQuiz />}>
                        Test Your Knowledge
                    </GenerateButton>
                </Link>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: primaryColor,
                            height: `${value}px`,
                        }}
                    ></div>
                ))}
            </div>
        </VStack>
    );
}
const handleRefreshPage = () => {
    window.location.reload(true);
};

const randomArray = () => {
    const array = [];
    for (let i = 0; i < window.innerWidth / 16; i++) {
        array.push(randomIntFromInterval(10, window.innerHeight / 2));
    }
    return array;
};

//FROM: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisual;
