import {useEffect, useState} from "react";
import React from "react";

const LocalStorage = () => {
    const [name, setName] = useState<string>(JSON.parse(window.localStorage.getItem("name") as string));

    useEffect(() => {
        window.localStorage.setItem("name", JSON.stringify(name));
    }, [name])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleClear = () => {
        setName("");
    };

    return (
        <div>
            <h1>{name}</h1>
            <div className="flex gap-2">
                <input onChange={handleChange} className="border border-solid border-black focus:outline-none px-1"
                       placeholder="Enter your name" type="text" value={name}/>
                <button onClick={handleClear} className="bg-black text-white px-1 hover:opacity-50">Clear</button>
            </div>
        </div>
    )
}
export default LocalStorage
