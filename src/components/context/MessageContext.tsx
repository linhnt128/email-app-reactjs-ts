import { createContext } from "react";
import messageData from "../../assets/data/messages.json";



interface IMessageProviderProps {
    children: React.ReactNode
};


export interface IMessageContextValue {
    id: string,
    folder: string,
    from: {
      email: string,
      name: string,
      avatarUrl: string
    },
    to: {
      email: string,
      name: string,
      avatarUrl: string
    },
    timestamp: string,
    main: {
      title: string,
      content: string,
    },
    unread: boolean
};





// -----------------------------------------main code starts here----------------------------------------------------------
const MessageContext = createContext<IMessageContextValue[]>(messageData);



const MessageProvider = ( { children }: IMessageProviderProps ) => {



    return (
        <MessageContext.Provider value = { messageData }>
            { children }
        </MessageContext.Provider>
    )
};



export {
    MessageContext,
    MessageProvider
};