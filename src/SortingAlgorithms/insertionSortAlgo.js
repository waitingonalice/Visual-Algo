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
        let container = i;
        animations.push([container, container - 1,true]);
        animations.push([container, container - 1, true]);
        
        while(container > 0 && array[container - 1] > temp){
            animations.push([container, container - 1,true]);
            animations.push([container, container - 1,true]);
            animations.push([container, array[container -1]]);
            animations.push([container, array[container - 1]]);
            
            array[container] = array[container-1];
            container--;
            
        }
        animations.push([container, temp]);
        animations.push([container, temp]);
        
        array[container] = temp;
    }

} 

