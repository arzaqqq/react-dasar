import React from 'react'
import {useState, useEffect, useRef} from 'react'

export default function ref() {
    const {counter, setCounter} = useState(0);
    const rerednder = useRef(0)

    // cara panggil useRef
    // console.log(rerednder.current++)
    useEffect(() => {
        console.log(rerednder.current, counter)
    }, [])

    const addCounter = () => {
        setCounter(counter + 1)
    }

    const addRerender = () => {
        rerednder.current + 4
    }

    const cekValue = () => {
        console.log(counter, rerednder.current)
    }

  return (

    <div>
    <h1>useState</h1>
    <p>{counter}</p>  
    <h1>useRef</h1>
    <p>{rerednder.current}</p>

    <button onClick={addCounter}>
        Add Counter
    </button>
    <button onClick={addRerender}>
        Add Rerender
    </button>
    </div>
  )
}
