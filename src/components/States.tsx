import {useState} from "react";

const States = () => {
    const [count, setCount] = useState(0);
    const [onButtonHover, setOnHoverBtnHover] = useState({incBtn: false, decBtn: false, addBtn: false});
    const [friends, setFriends] = useState(["0"])

    const incrementHandler = () => {
        setCount(prevState => prevState + 1);
    }
    const decrementHandler = () => {
        setCount(prevState => prevState - 1);
    }

    const decrementButtonStyles = {
        "backgroundColor": onButtonHover.decBtn ? "black" : "green",
        "color": "white",
        "padding": "5px 10px",
        "transition": "background-color 0.2s ease-out",
    }

    const incrementButtonStyles = {
        "backgroundColor": onButtonHover.incBtn ? "black" : "green",
        "color": "white",
        "padding": "5px 10px",
        "transition": "background-color 0.2s ease-out",
    }

    const inputStyles = {
        "border": "1px solid darkgreen",
        "borderLeft": "0px ",
        "borderRight": "0px",
        "padding": "4px 10px",
        "margin": "0px",
    }

    const unorderedListStyle = {
        "padding": "5px 35px",
        "margin": "0px",
        "height": "75px",
        "overflow": "scroll",
        "border": "1px solid darkgreen"
    }

    const buttonStyle = {
        "backgroundColor": onButtonHover.addBtn ? "black" : "green",
        "color": "white",
        "padding": "5px 10px",
        "transition": "background-color 0.2s ease-out",
    }

    const addNewFriend = () => {
        setFriends([...friends, "1"]);
        const ul = document.querySelector("ul");
        ul?.scroll(0, 80);
    }

    const updateFriend = () => {
        setFriends(friends.map((f) => f === "0" ? "1" : f === "1" ? "0" : f));
    }

    return (
        <>
            <div>States</div>
            <div className="flex justify-center items-center">
                <button style={decrementButtonStyles}
                        onMouseEnter={() => setOnHoverBtnHover({...onButtonHover, decBtn: true})}
                        onMouseLeave={() => setOnHoverBtnHover({...onButtonHover, decBtn: false})}
                        onClick={decrementHandler}>-
                </button>
                <p style={inputStyles}>{count}</p>
                <button style={incrementButtonStyles}
                        onMouseEnter={() => setOnHoverBtnHover({...onButtonHover, incBtn: true})}
                        onMouseLeave={() => setOnHoverBtnHover({...onButtonHover, incBtn: false})}
                        onClick={incrementHandler}>+
                </button>
            </div>
            <ul style={unorderedListStyle}>
                {friends.map((friend, index) =>
                    (
                        <li key={index}>{friend}</li>
                    ))}
            </ul>
            <button style={buttonStyle} onClick={addNewFriend}
                    onMouseEnter={() => setOnHoverBtnHover({...onButtonHover, addBtn: true})}
                    onMouseLeave={() => setOnHoverBtnHover({...onButtonHover, addBtn: false})}>
                Add Friend
            </button>
            <button className="hover:bg-black transition-colors duration-200 ease-out bg-green-700 px-2 py-1 text-white rounded-3xl"
                    onClick={updateFriend}
            >
                Update Friend
            </button>
        </>
    )
}
export default States
