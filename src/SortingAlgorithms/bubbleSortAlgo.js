export function getBubbleSortAnimations(array){
    const animations =[];
    if(array.length <=1){
        return array;
    }
    const supportArray = [...array]//clones array;
    bubbleSort(0,supportArray,animations);
    return animations;
}

//1. create array to hold values
//2. while the array isnt sorted, iterate through array
//3. if the value of index i > i+1, swap

function bubbleSort(start,array,animations){
    let i = start;
    let j = array.length-1;
    let sorted = false;
    let round = 0;
    while(!sorted){
        sorted = true;
        for(let comparingElement = i; comparingElement < j-round; comparingElement++){
            animations.push([comparingElement, comparingElement+1,true]); 
            animations.push([comparingElement, comparingElement+1,true]); 
            if(array[comparingElement]>array[comparingElement+1]){
                animations.push([comparingElement, array[comparingElement+1]]);
                animations.push([comparingElement+1, array[comparingElement]]);
                let temp = array[comparingElement];
                array[comparingElement] = array[comparingElement+1];
                array[comparingElement+1] = temp;
                sorted = false;  
            }   
            
        }
        round++;
    }    
}