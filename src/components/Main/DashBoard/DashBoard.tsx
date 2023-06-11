import { UserProvider } from "../../context/UserContext";
import logo from "../../../assets/images/connect-logo-white.svg";
import { useLocation } from "react-router-dom";



// import components
import NavBar from "../NavBar/NavBar";
import FolderNavigation from "./Navigation/FolderNavigation";
import MainNavigation from "./Navigation/MainNavigation";




interface IMyProps {
    path: string;
};


// -----------------------------------------main code starts here----------------------------------------------------------
const DashBoard = (props: IMyProps) => {

    const { path } = props;










    return(
            <div className="w-1/6 bg-errMessage text-white h-screen justify-center items-center text-center">
                <div className="flex flex-shrink-0 w-full text-white items-center px-5 py-5 bg-midnight h-20">
                    <img src={logo} className="object-contain w-full h-full" alt="logo-white"/>
                </div>
                {/* Navigation */}
                <div className="h-full flex items-center w-full">
                    {/* Folter Nav */}
                    <FolderNavigation />

                    {/* Main Nav */}
                    <MainNavigation path={path} />
                </div>
            </div>
    )
}

export default DashBoard;