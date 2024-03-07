import { useState } from "react";

export const useCounter = (minVal = 0, maxVal = 1, initialCount = 1) => {
    const [count, setCount] = useState(minVal)

    const increment = () => {
        if (count + initialCount <= maxVal)
            setCount(count + initialCount)
    }

    const decrement = () => {
        if (count - initialCount >= minVal) {
            setCount(count - initialCount)
        }
    }

    const reset = () => {
        setCount(minVal)
    }

    return { count, increment, decrement, reset }

}