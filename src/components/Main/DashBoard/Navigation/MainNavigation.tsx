
// import messages from "../../../../assets/data/messages.json";
import { useState } from "react";

import DefaultMainNav from "../../Defaults/DefaultMainNav";

import {  NavLink, useParams  } from "react-router-dom";







// -----------------------------------------main code starts here----------------------------------------------------------
const mainNavTexts = [
    {
        id: 1,
        text: "inbox",
        active: false
    },
    {
        id: 2,
        text: "sent",
        active: false
    },
    {
        id: 3,
        text: "reminder",
        active: false
    },
    {
        id: 4,
        text: "spam",
        active: false
    },
    {
        id: 5,
        text: "favorite",
        active: false
    },
    {
        id: 6,
        text: "junks",
        active: false
    },
    {
        id: 7,
        text: "drafts",
        active: false
    }
];


interface IMyProps {
    path: string;
};




const MainNavigation = (props: IMyProps) => {
    const { path } = props;



    return(
        <div className="max w-4/5 h-full bg-mainNav">
            <div className="flex flex-col items-center justify-center text-white">
                {
                    path && path.includes("/main/email")  ?
                    <>
                        {
                            mainNavTexts && mainNavTexts.map((mainNavText) => (
                                <NavLink 
                                    to={`/main/email/` + mainNavText.text}
                                    key={mainNavText.id} 
                                    className="flex w-full h-14 items-center justify-start pl-10 font-normal text-md capitalize"
                                    
                                >
                                    { mainNavText.text }
                                </NavLink>
                            )) 
                        }
                    </> 
                    :
                    <DefaultMainNav />
                }
            </div>
        </div>
    )
};

export default MainNavigation;

