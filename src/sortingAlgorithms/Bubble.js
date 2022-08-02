export const bubbleSort = arr => {
    let swaps = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                arr = swap(j, j+1, arr)
                swaps += 1;
            }
        }
    }
    return [arr, swaps];
}
      
function swap(indx1, indx2, arr){
    const temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
    return arr;
}

