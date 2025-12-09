import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p className="bg-red-500 text-white px-2 py-1 cursor-pointer select-none" onClick={() => setCount(prevState => prevState + 1)}>{count}</p>
        </div>
    )
}
export default Counter
