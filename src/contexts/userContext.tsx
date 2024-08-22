import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, useCallback } from "react";
import { IUser } from "../types/user";



interface UserContextProps {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    fetchUser: () => void;
}

const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => { },
    fetchUser: () => { },
});

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const token = localStorage.getItem("token");

    const fetchUser = useCallback(() => {
        const dataUser = localStorage.getItem("user");
        if (dataUser) {
            setUser(JSON.parse(dataUser));
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser, token]);

    return <UserContext.Provider value={{ user, setUser, fetchUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };