import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useContext, memo } from "react";
import { UserContext } from "../../context/UserContext";

import { useNavigate } from 'react-router-dom';

interface IMyProps {
    path: string;
    setUserAuth: (value: boolean) => void;
};



// -----------------------------------------main code starts here----------------------------------------------------------
const NavBar = (props: IMyProps) => {
    const navigate = useNavigate();
    const userDatas = useContext(UserContext);
    const { path, setUserAuth } = props;

    const handleLogOut = () => {
        navigate("/login");
    };
    

    return(
        <div className="w-full h-20 bg-white flex justify-between items-center text-black px-3 py-0">
            {/* Pathname */}
            <div className="font-medium">
                <p>Pathname: <span className="font-semibold">{path}</span></p>
            </div>
            {/* Profile */}
            <div className="">
                <div className="flex justify-center items-center">
                    {/* Profile details */}
                    <div className="flex-col justify-center items-center leading-5">
                        <p className="font-semibold text-black">{userDatas[0].name}</p>
                        <p className="font-medium text-black">{userDatas[0].email}</p>
                    </div>
                    {/* Profile picture */}
                    <img src={userDatas[0].avatarUrl} className="rounded-full w-10 h-10 mx-3" alt="user-avatar"/>
                    {/* Logout Button */}
                    <button className="bg-logOut rounded w-15 h-8 py-2 px-4 flex items-center justify-center text-white">
                        <FontAwesomeIcon icon={faPowerOff} onClick={handleLogOut}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(NavBar);