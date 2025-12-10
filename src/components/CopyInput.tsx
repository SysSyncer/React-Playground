import {useState} from "react";
import React from "react";
import {FaClipboard} from "react-icons/fa";
import {FaClipboardCheck} from "react-icons/fa";
import PopContent from "./PopContent.tsx";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopied = async () => {
        await navigator.clipboard.writeText(inputValue).then(() => {
            setTimeout(() => {
                setIsCopied(false);
            }, 4000);
            setIsCopied(true);
        });
    }

    return (
        <div>
            <PopContent copied={isCopied}/>
            <div className="flex gap-2 items-center m-0 p-0">
                <input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                    value={inputValue}
                />
                <button onClick={handleCopied}
                        className="p-1 text-white border-black border-solid border bg-black hover:opacity-35 align-middle">
                    {isCopied ? <FaClipboardCheck/> : <FaClipboard/>}
                </button>
            </div>
        </div>
    )
}
export default CopyInput
