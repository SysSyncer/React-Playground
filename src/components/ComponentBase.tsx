import ComponentOne from "./ComponentOne.tsx";
import ComponentTwo from "./ComponentTwo.tsx";
import {useState} from "react";

const ComponentBase = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className="hover:underline cursor-pointer">Common state</h1>
            <ComponentOne count={count} incrementHandler={() => setCount(prevState => prevState + 1)}/>
            <ComponentTwo count={count} decrementHandler={() => setCount(prevState => prevState - 1)}/>
        </>
    )
}
export default ComponentBase
