import { swap } from "./Swap";

export const bubbleSort = (arr) => {
    let swaps = 0;
    let animations = [];
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                arr = swap(j, j+1, arr)
                animations.push([j, j+1]);
                swaps += 1;
            }
        }
    }

    return [animations, swaps, arr];
}

