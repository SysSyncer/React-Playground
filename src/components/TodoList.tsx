import {useState} from "react";
import React from "react";
import Btn from "./Btn.tsx"

const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    return (
        <div>
            <input className="border border-solid border-black focus:outline-none px-1" type="text" placeholder="Todo"
                   onChange={handleChange} value={inputValue}/>
            <Btn onClick={handleClick} >Add</Btn>
            <ul className="p-0 m-0">
                {
                    todos?.map((todo, idx) => (
                        <li key={idx}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList
