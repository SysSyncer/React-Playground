import {createContext, type ReactNode, useState} from "react";

interface User {
    name: string;
}

interface UserContextType {
    user: User,
    updateName: (newName: string) => void
}

const UserContext = createContext<UserContextType>({
    user: {name: ""},
    updateName: () => {
    }
});

const UserProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User>({name: ""});
    const updateName = (newName: string) => {
        setUser({name: newName});
    }
    return (
        <UserContext value={{user, updateName}}>
            {children}
        </UserContext>
    )
}

export {UserContext, UserProvider}
