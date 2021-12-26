export function getBubbleSortAnimations(array){
    const animations =[];
    if(array.length <=1){
        return array;
    }
    const supportArray = array.slice();
    bubbleSort(0,supportArray,animations);
    return animations;
}

function bubbleSort(start,array,animations){
    let i = start;
    let sorted;
        do{
            sorted = false;
            for(let comparingElement = i; comparingElement < array.length-1; comparingElement++){
                animations.push([comparingElement, comparingElement+1,true]); 
                animations.push([comparingElement, comparingElement+1,true]);
                if(array[comparingElement]>array[comparingElement+1]){
                    animations.push([comparingElement, array[comparingElement+1],false]);
                    animations.push([comparingElement+1, array[comparingElement],false]);
                    let temp = array[comparingElement];
                    array[comparingElement] = array[comparingElement+1];
                    array[comparingElement+1] = temp;
                     sorted = true;
                
                }   
            
            }

        }while(sorted);
}