import {UserContext} from "./UserContext.tsx";
import {type ChangeEvent, useContext, useState} from "react";


const UserProfile = () => {
    const [name, setName] = useState<string>("");
    const {user, updateName} = useContext(UserContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleClick = () => {
        if (name && name.length) {
            updateName(name);
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            <h3>{user.name}</h3>
            <input onChange={handleChange} type="text"/>
            <button className="bg-black text-white px-1 focus:outline-none w-fit" onClick={handleClick}>Change Name</button>
        </div>
    )
}
export default UserProfile
