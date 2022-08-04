import { swap } from "./Swap";

export const quickSort = (arr) => {
    let swaps = 0;
    let quickAnimations = [];

    sort(0, arr.length - 1, arr, quickAnimations, swaps)   

    return [quickAnimations, swaps, arr];
}

function generatePartition(low, high, arr, animations, swaps){

   // let partIndex = Math.floor(Math.random() * (high - low + 1) + low)
    let partIndex = Math.floor((low + high)/2);
    swap(partIndex, high, arr);
    animations.push([partIndex, high])
    swaps += 1;

    let i = low;
    for(let j = low; j<high;j++){
        if(arr[j] < arr[high]){
            swap(i,j, arr);
            animations.push([i, j])
            i +=1;
            swaps += 1;
        }
    }
    swap(i, high, arr);
    swaps += 1;
    animations.push([i, high])
    return i;
}

function sort(low, high, arr, animations, swaps){
    if(high < low) return;
    let pivot = generatePartition(low, high, arr, animations, swaps)
    sort(low, pivot-1, arr, animations, swaps);
    sort(pivot+1, high, arr, animations, swaps);
}

