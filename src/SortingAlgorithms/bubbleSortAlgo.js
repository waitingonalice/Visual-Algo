export function getBubbleSortAnimations(array){
    const animations =[];
    if(array.length <=1){
        return;
    }
    const supportArray = array.slice(0);
    bubbleSort(array,0,supportArray,animations);
    return animations;
}

function bubbleSort(array,startIdx,supportArray,animations){
    let length = array.length;
    let i = startIdx;
    
    
        animations.push([i,i+1]);
        for(let mainElement = length; mainElement > 0; mainElement--){
            for(let comparingElement = i; comparingElement < mainElement; comparingElement++){ 
                if(array[comparingElement]>array[comparingElement+1]){
                    
                    let temp = array[comparingElement];
                    array[comparingElement] = array[comparingElement+1];
                    array[comparingElement+1] = temp;
                    
                    
            }
        }
    }
    
    
}