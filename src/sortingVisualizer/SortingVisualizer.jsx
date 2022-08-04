import React, { useState } from 'react'
import './SortingVisualizer.css'
import { bubbleSort } from '../sortingAlgorithms/Bubble.js';
import { testAlgos } from '../sortingAlgorithms/Testing';
import { quickSort } from '../sortingAlgorithms/Quicksort';

const SortingVisualizer = () => {
    const [arr, setArr] = useState(generateArray());
    const [swaps, setSwaps] = useState(0);

    function generateArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomNumberInRange(5, 300))
        }
        return array;
    }
    async function bubbleSorting() {
        let copy = [...arr]
        const sorted = bubbleSort(copy)
        setSwaps(sorted[1])
        let animations = ([...sorted[0]]);
        await visualize(animations);
    }

    async function quickSorting(){
        let copy = [...arr]
        const sorted = quickSort(copy)
        setSwaps(sorted[1])
        let animations = ([...sorted[0]]);
        await visualize(animations);
    }

    function reset() {
        setArr(generateArray());
    }
    
    function test() {
        console.log(testAlgos(arr));
    }
    
    async function visualize(animations){
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i = 0; i < animations.length; i++){

            const barOneIdx = animations[i][0];
            const barTwoIdx = animations[i][1];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style; 
            let temp = arrayBars[barOneIdx].style.height

            barOneStyle.backgroundColor = 'red'
            barTwoStyle.backgroundColor = 'red'
            arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height
            arrayBars[barTwoIdx].style.height = temp
            await new Promise(r => setTimeout(r, 1));
            barOneStyle.backgroundColor = 'blue'
            barTwoStyle.backgroundColor = 'blue'

        }
    }

    let arrayBar = arr.map((val, index) => { return (<div key={index} className='array-bar' style={{ height: `${val}px` }}>{val}</div>) })

    return (
        <div>
            <button onClick={reset}>Try new array</button>
            <button onClick={bubbleSorting}>Bubble sort</button>
            <button onClick={quickSorting}>Quick sort</button>
            <button onClick={test}>Quick test</button>
            <h4>Algo made {swaps} swaps</h4>
            <div className='array-container'>
                {arrayBar}
            </div>
        </div>

    )
}

export default SortingVisualizer

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

