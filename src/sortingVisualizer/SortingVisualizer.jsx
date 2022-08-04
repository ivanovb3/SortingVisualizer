import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import { bubbleSort } from '../sortingAlgorithms/Bubble.js';
import { testAlgos } from '../sortingAlgorithms/Testing';

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
        const sorted = bubbleSort(copy, setArr)
        setSwaps(sorted[1])
        let animations1 = ([...sorted[0]]);
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i = 0; i < animations1.length; i++){

            const barOneIdx = animations1[i][0];
            const barTwoIdx = animations1[i][1];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style; 

            let temp = arrayBars[barOneIdx].style.height
            barOneStyle.backgroundColor = 'red'
            barTwoStyle.backgroundColor = 'red'
            arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height
            arrayBars[barTwoIdx].style.height = temp
            await new Promise(r => setTimeout(r, 0.001));
            barOneStyle.backgroundColor = 'blue'
            barTwoStyle.backgroundColor = 'blue'

        }
    }
    function reset() {
        setArr(generateArray());
    }
    function test() {
        console.log(testAlgos(arr));
    }

    let arrayBar = arr.map((val, index) => { return (<div key={index} className='array-bar' style={{ height: `${val}px` }}>{val}</div>) })

    return (
        <div>
            <button onClick={reset}>Try new array</button>
            <button onClick={bubbleSorting}>Bubble sort</button>
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

