import React from "react";

const ComponentOne = ({count, incrementHandler}: {count: number, incrementHandler: React.MouseEventHandler<HTMLButtonElement> | undefined}) => {
    return (
        <div>
            <p>{count}</p>
            <button className="px-4 border-black border-solid border" onClick={incrementHandler}>+</button>
        </div>
    )
}
export default ComponentOne
