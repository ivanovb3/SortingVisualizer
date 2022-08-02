import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import { bubbleSort } from '../sortingAlgorithms/Bubble.js';
import { testAlgos } from '../sortingAlgorithms/Testing';

const SortingVisualizer = () => {
    const [arr, setArr] = useState(generateArray());
    const [swaps, setSwaps] = useState(0);

    useEffect(() => {
        // arrayBar = arr.map((val, index) => { return (<div key={index} className='array-bar' style={{ height: `${val}px` }}>{val}</div>) })
    }, [arr])

    function generateArray() {
        const array = [];
        for (let i = 0; i < 600; i++) {
            array.push(randomNumberInRange(5, 700))
        }
        return array;
    }
    function bubbleSorting() {
        const sorted = bubbleSort(arr)
        setSwaps(sorted[1])
        setArr([...sorted[0]]);
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

