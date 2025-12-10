import {useState} from "react";
import React from "react";

interface IProfile {
    name: string;
    age: number;
}

const Profile = () => {
    const [profiles, setProfiles] = useState<IProfile[]>([]);
    const [profile, setProfile] = useState<IProfile>();

    const handleEditProfile = (targetIdx: number) => {
        const updatedProfiles = profiles.map((p, idx) => {
            if (idx === targetIdx) {
                p.name = profile?.name as string;
                p.age = profile?.age as number;
                return p;
            }
            return p;
        });
        setProfiles(updatedProfiles);
    }

    const handleDeleteProfile = (targetIdx: number) => {
        const updatedProfiles = profiles.filter((_, idx) => idx !== targetIdx);
        setProfiles(updatedProfiles);
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const updatedProfile: IProfile = {
            name: event.target.value as string,
            age: profile?.age as number
        };
        setProfile(updatedProfile);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const updatedProfile: IProfile = {
            name: profile?.name as string,
            age: Number.parseInt(event.target.value) as number,
        };
        setProfile(updatedProfile);
    };

    const handleProfileAdd = () => {
        const newProfile: IProfile = {
            name: profile?.name as string,
            age: profile?.age as number,
        };
        setProfiles([...profiles, newProfile]);
    };

    return (
        <div>
            <input type="text" placeholder="Name" onChange={handleNameChange}
                   className="border border-solid border-black focus:outline-none px-1 block mb-2"/>
            <input type="number" placeholder="Age" onChange={handleAgeChange}
                   className="border border-solid border-black focus:outline-none px-1 block"/>
            <button onClick={handleProfileAdd} className="block bg-black text-white px-2 py-1 mb-3 mt-2">Add</button>
            <ul className="p-0 m-0 max-h-[250px] overflow-y-scroll">
                {
                    profiles.map((profile, idx) => (
                        <div key={idx}
                             className="flex justify-between gap-2 w-lg border border-solid border-black p-1 mt-1">
                            <li className="text-left">
                                <p className="mb-1"><span className="font-bold">Name:&nbsp;</span> {profile.name}</p>
                                <p className="mb-1"><span className="font-bold">Age:&nbsp;</span>{profile.age}</p>
                            </li>
                            <div className="flex gap-2 mt-5">
                                <button className="bg-black text-white px-2"
                                        onClick={() => handleEditProfile(idx)}>Edit
                                </button>
                                <button className="bg-black text-white px-2"
                                        onClick={() => handleDeleteProfile(idx)}>Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Profile
