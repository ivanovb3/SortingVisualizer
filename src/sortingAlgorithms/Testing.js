import { bubbleSort } from "./Bubble.js"

export const testAlgos = arr =>{  
    let sorted = arr.sort(function(a,b) {
        return a - b
    });

    let bubble = bubbleSort(arr);

    return arraysAreEqual(sorted, bubble[2]);
}

function arraysAreEqual(arr1, arr2){
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}
      

