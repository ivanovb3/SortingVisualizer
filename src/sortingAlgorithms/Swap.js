export const swap = (indx1, indx2, arr) =>{
    const temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
    return arr;
}