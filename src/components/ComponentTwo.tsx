import React from "react";

const ComponentTwo = ({count, decrementHandler}: {count: number, decrementHandler: React.MouseEventHandler<HTMLButtonElement> | undefined}) => {
    return (
        <div>
            <p>{count}</p>
            <button className="px-4 border-black border-solid border" onClick={decrementHandler}>-</button>
        </div>
    )
}
export default ComponentTwo;
