export function getInsertionSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const supportArray = [...array]; //clones array
    insertionSort(supportArray,animations);
    return animations;
}
// }
//1. iterate from arr[1] to arr [n] over the array
//2. compare current element (key) to its predecessor 
//3. if key element is small than its predecessor, compare it to the elements before
//4. move greater one position up to make space for swapped element. 

function insertionSort(array,animations){

    for(let i = 1;i<array.length;i++){
        let temp = array[i];
        let curr = i;
        animations.push([curr, curr - 1,true]);
        animations.push([curr, curr - 1, true]);
        
        while(curr > 0 && array[curr - 1] > temp){
            animations.push([curr, curr - 1,true]);
            animations.push([curr, curr - 1,true]);
            animations.push([curr, array[curr -1]]);
            animations.push([curr, array[curr - 1]]);
            
            array[curr] = array[curr-1];
            curr--;
            
        }
        animations.push([curr, temp]);
        animations.push([curr, temp]);
        
        array[curr] = temp;
    }

} 

