import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
    return <>
    <h1>{count}</h1>
    <button onClick={handleCount}>Increment</button>
    </>
   }

export default Counter;