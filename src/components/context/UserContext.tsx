import { createContext } from "react";
import userInfors from "../../assets/data/users.json";



interface UserContextProviderProps {
    children: React.ReactNode
};


interface IUserContextValue {
    email: string;
    password: string;
    name: string;
    avatarUrl: string;
};





// -----------------------------------------main code starts here----------------------------------------------------------
const UserContext = createContext<IUserContextValue[]>(userInfors);



const UserProvider = ( { children }: UserContextProviderProps ) => {



    return(
        <UserContext.Provider value = { userInfors }>
            { children }
        </UserContext.Provider>
    )
};



export {
    UserContext,
    UserProvider
};