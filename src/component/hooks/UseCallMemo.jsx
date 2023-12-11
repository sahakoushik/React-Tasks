
// useCallback remembers the function 

// useMemo remembers the return value of the function 


import { useState, useCallback, useMemo } from 'react'
import HookButton from './Button'
import ShowCount from './showCount'

function UseCallMemo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // const incrementByOne = () => {setCount1((prevState) => prevState + 1)}
    const incrementByOne = useCallback(() => {
        setCount1((prevState) => prevState + 1)
    }, [])

    const incrementByFive = useCallback(() => {
        setCount2((prevState) => prevState + 5)
    }, [])

    const isEvenOdd = useMemo(() => {
        return count1 % 2 === 0
    }, [count1])



    return (
        console.log(count1 % 2),
        console.log(count2 % 2),
        < div >
            <p>This is sparta</p>
            <ShowCount title="Counter1" count={count1} />
            <HookButton handelChange={incrementByOne}> Increment by 1</HookButton>
            <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
            <hr />
            <ShowCount title="Counter2" count={count2} />
            <HookButton handelChange={incrementByFive}> Increment by 5</HookButton>
        </div >
    )
}

export default UseCallMemo