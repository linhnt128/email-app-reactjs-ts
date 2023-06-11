import { useLocation, useNavigate } from "react-router-dom";
import { UserProvider } from "../context/UserContext.tsx";
import { MessageProvider } from "../context/MessageContext.tsx";
import { useState } from "react";

// import components
import NavBar from "./NavBar/NavBar";
import DashBoard from "./DashBoard/DashBoard.tsx";
import Layout from "./Layout/Layout.tsx";


interface IMyProps {
    userAuth: boolean;
    setUserAuth: (value: boolean) => void;
};


// -----------------------------------------main code starts here----------------------------------------------------------
const Main = (props: IMyProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { userAuth, setUserAuth } = props;
    const path = location.pathname;

    // Protected route
    if(userAuth === false) {
        navigate("/login");
    };


    return(
        <div className="flex w-screen max-h-screen">
            {/* Main Dashboard */}
            <DashBoard path={path} />
            {/* Main Layout */}
            <div className="w-5/6 bg-white text-black flex flex-col items-center text-center">
                {/* Navbar */}
                <div className="w-full border-b border-emailBorder">
                    <UserProvider>
                        <NavBar path={path} setUserAuth={setUserAuth}/>
                    </UserProvider>
                </div>
                <div className="h-full w-full">
                    <MessageProvider>
                        <Layout />
                    </MessageProvider>
                </div>
            </div>
        </div>
    );
};

export default Main;