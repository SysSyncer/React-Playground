import {useEffect, useState} from "react";

const BasicEffect = () => {
    const [message, setMessage] = useState<string>("Initial State (Wait for 5s)");
    useEffect(() => {
        console.log("In useEffect");
        setTimeout(() => {
            setMessage("Rendered in useEffect");
            console.log("First Render Complete");
        }, 5000);
    },[]);

    return (
        <div>
            <h1>{message}</h1>
            <small>Check Console</small>
        </div>
    )
}
export default BasicEffect
