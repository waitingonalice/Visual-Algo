export function getQuickSortAnimations(array){
    const animations =[];
    if(array.length <=1){
        return array;
    }
    const supportArray = [...array]//clones array;
    quickSort(0, array.length-1, supportArray, animations);
    return animations;
}

//do quicksort algo here
const quickSort = (low, high, array, animations) => {
    if (low < high) {
        let pi = partition(low, high , array, animations);
        quickSort(low, pi - 1, array, animations);
        quickSort(pi + 1, high, array, animations); 
    }
}

const partition = (low, high, array, animations) => {
    let i = low, pivot = array[high];
    //at each iteration of j, 
    //swap j with i if j < pivot value, separating values smaller and larger than pivot
    for (let j = low; j < array[high - 1]; j++){
        animations.push([i, j]);
        animations.push([i, j]);
        if (array[j] < pivot) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
    }

    //main partition -- once j reaches array[high -1], swap pivot to value[i];
    let temp = array[i];
    array[i] = array[high];
    array[high] = temp;
    return i; 
}
