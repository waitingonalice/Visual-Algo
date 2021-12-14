import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array:[],
        };
    }
    //Change to useEffect hook to reset array 
    componentDidMount(){
        this.resetArray();
    }
    //This resets the array to randomized ints between 5 - 1000 when "Generate new array" button is clicked
    resetArray(){
        const array = [];
        for(let i = 0; i<320; i++){
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){
        
    }



    render(){
        const {array} = this.state;

        return(
            <div className="array-container">
               <div id = "button">
                <button onClick = {()=>this.resetArray()}>Generate new Array</button>
                <button onClick = {()=>this.mergeSort()}>Merge Sort</button>
                <button onClick = {()=>this.quickSort()}>Quick Sort</button>
                <button onClick = {()=>this.heapSort()}>Heap sort</button>
                <button onClick = {()=>this.bubbleSort()}>Bubble Sort</button>
               </div>
                {array.map((value, idx) => (
                    <div className = "array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}> 
                    </div>
                ))}   
            </div>
            
        );
    }
    
}
//FROM: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min); 
}
