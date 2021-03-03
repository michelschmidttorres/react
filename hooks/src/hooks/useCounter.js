import { useState } from 'react'

export const useCounter = (initialValue = 100) => {
    const [count, setcount] = useState(initialValue)

    function inc() {
        setcount(count + 1)
    }
    
    function dec() {
        setcount(count - 1)
    }

    return [count, inc, dec]     
}
