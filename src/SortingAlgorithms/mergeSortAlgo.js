export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const supportArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, supportArray, animations);
    return animations; 
}

//swaps mainArray with supportArray during merge sort
function mergeSortHelper(mainArray, startIdx, endIdx, supportArray, animations){
    if(startIdx===endIdx){
        return;
    }
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(supportArray, startIdx, middleIdx, mainArray, animations); 
    //swaps first half of mainArray with supportArray
    mergeSortHelper(supportArray, middleIdx+1, endIdx, mainArray, animations); 
    //swaps second half of mainArray with SupportArray
    mergeSort(mainArray,startIdx,middleIdx,endIdx,supportArray,animations);
}

function mergeSort(mainArray,startIdx,middleIdx,endIdx,supportArray,animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    //operation 1
    while(i <= middleIdx && j <=endIdx){
        animations.push([i,j]); //push index i and j into animations array once to change color 
        animations.push([i,j]); //push index i and j into animations array a second time to revert color
        if(supportArray[i]<=supportArray[j]){
            animations.push([k,supportArray[i]]);
            mainArray[k++] = supportArray[i++];
            //swap then increment to the next index
        }else{
            animations.push([k,supportArray[j]]);
            mainArray[k++] = supportArray[j++];
        }
    }
    //operation 2
    while(i<=middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,supportArray[i]]);
        mainArray[k++] = supportArray[i++];
    }
    //operation 3
    while(j<=endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,supportArray[j]]);
        mainArray[k++] = supportArray[j++];
    }
}
  