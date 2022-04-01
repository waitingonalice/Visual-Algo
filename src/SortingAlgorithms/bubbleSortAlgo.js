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
        for(let x = i; x < j-round; x++){
            animations.push([x, x + 1, true]); 
            animations.push([x, x + 1, true]); 
            
            if(array[x]>array[x+1]){
                animations.push([x, array[x + 1]]);
                animations.push([x + 1, array[x]]);
                
                let temp = array[x];
                array[x] = array[x + 1];
                array[x + 1] = temp;
                sorted = false;  
            }   
            
        }
        round++;
    }    
}