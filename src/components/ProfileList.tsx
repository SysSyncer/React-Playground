import {useState} from "react";
import React from "react";
import Btn from "./Btn.tsx";

interface IProfile {
    name: string;
    age: number;
}

const ProfileList = () => {
    const [profile, setProfile] = useState<IProfile>({name: "", age: 0});
    const [profiles, setProfiles] = useState<IProfile[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        // const newProfile: IProfile = {
        //     name: event.target.name === "name" ? event.target.value : profile.name,
        //     age: event.target.name === "age" ? Number.parseInt(event.target.value) : profile.age
        // }
        // setProfile(newProfile);
        const {name, value} = event.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleAdd = () => {
        if (profile.name && profile.age) {
            setProfiles([...profiles, profile]);
            setProfile({name: "", age: 18});
        }
    };

    return (
        <div className="flex flex-col gap-3 items-center">
            <h2>User Profiles</h2>
            <div className="flex gap-2 items-start justify-center">
                <label>Name:&nbsp;
                    <input type="text" name="name" onChange={handleChange} value={profile?.name}
                           className="focus:outline-none px-1 border border-black border-solid"
                           placeholder="your name"/>
                </label>
                <label>Age:&nbsp;
                    <input type="number" name="age" onChange={handleChange} value={profile?.age}
                           className="focus:outline-none px-1 border border-black border-solid" placeholder="your age"/>
                </label>
                <Btn className="self-center" onClick={handleAdd}>Add</Btn>
            </div>
            <ul className="p-0 mt-3 max-h-[150px] w-full overflow-y-scroll">
                {
                    profiles.map((p, idx) => (
                        <>
                            <li key={idx} className="flex justify-around items-center">
                                <h3 className="m-0 p-0">{p.name}</h3>
                                <p className="m-0 p-0">{p.age}</p>
                            </li>
                            <hr/>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}
export default ProfileList;