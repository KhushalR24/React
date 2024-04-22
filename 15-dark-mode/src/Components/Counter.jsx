import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

    const action = (e , n ) => {
        if (e === 'increment') {
            setCounter(counter + 1)
            
        } if (e === 'decrement' ) {
            setCounter(counter - 1)
            
        }
        console.log(n);
    }

        return (
            <div>
                <h1>Counter</h1>
                <h1>{counter}</h1>
                <button onClick={() => action('increment', 'abc')}>Increment</button>
                <button onClick={() => action('decrement', 'xyz')}>Decrement</button>
            </div>
        )
    }

    export default Counter

    

