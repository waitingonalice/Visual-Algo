export function getQuickSortAnimations(array){
    const animations =[];
    if(array.length <=1){
        return array;
    }
    const supportArray = [...array]//clones array;
    quickSort(supportArray,animations);
    return animations;
}

//do quicksort algo here
const quickSort = (array,animations) => {

}