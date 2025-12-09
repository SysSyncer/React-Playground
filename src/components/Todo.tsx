import React from 'react'
import {useState} from "react";

interface ITodo {
    text: string;
    done: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [inputText, setInputText] = useState<string>("");

    const handleCheckBoxUpdate = (targetIdx: number) => {
        const updatedTodos = todos.map((todo, idx) => {
            if (idx === targetIdx) {
                return {...todo, done: !todo.done}
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.value.length <= 35) {
            setInputText(event.target.value);
        } else {
            window.alert("Should be less than 35 characters");
            return;
        }
        console.log(event.target.value.length);
    }

    const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputText) return;
        if (event.key == "Enter") {
            const newTodo: ITodo = {
                text: inputText,
                done: false,
            }
            setTodos([...todos, newTodo]);
            setInputText("");
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center max-w-xs">
            <ul className="p-0 m-0">
                {
                    todos.map((todo, idx) => (
                        <div key={idx} className="grid grid-cols-2 place-items-start">
                            <li className={todo.done ? "line-through text-gray-500" : ""}>{todo.text}</li>
                            <input className="place-self-end self-center" type="checkbox" checked={todo.done} onChange={() => handleCheckBoxUpdate(idx)}/>
                        </div>
                    ))
                }
            </ul>
            <input onChange={handleChange} className="border border-solid border-black px-1 w-xs focus:outline-none"
                   placeholder="What should I do today...? (Enter)" onKeyDown={handleAddTodo} value={inputText}
            />
        </div>
    )
}
export default Todo
