import React from "react";

const Btn = ({className, onClick, children}: {className?: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, children: React.ReactNode }) => {
    return (
        <button className={`bg-black text-white px-1 border border-black border-solid focus:outline-none ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Btn
