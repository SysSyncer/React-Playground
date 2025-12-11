import {useReducer} from "react";

type Action =
    | { type: "inc" }
    | { type: "dec" }
    | { type: "res" };

interface State {
    count: number;
}

const initialState: State = {count: 0};
const reducer = (prevState: State, action: Action): State => {
    switch (action.type) {
        case "inc":
            return {...prevState, count: prevState.count + 1};
        case "dec":
            return {...prevState, count: prevState.count - 1};
        case "res":
            return {...prevState, count: 0};
        default:
            return prevState
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center justify-center">
            <h2>useReducer</h2>
            <p>{state.count}</p>
            <div className="flex gap-2">
                <button className="bg-black text-white px-2" onClick={() => dispatch({type: "dec"})}>-</button>
                <button className="bg-black text-white px-2" onClick={() => dispatch({type: "res"})}>rst</button>
                <button className="bg-black text-white px-2" onClick={() => dispatch({type: "inc"})}>+</button>
            </div>
        </div>
    )
}

export default CounterReducer;
