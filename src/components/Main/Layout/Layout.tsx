import DefaultLayout from "../Defaults/DefaultLayout";
import EmailSummary from "./EmailSummary/EmailSummary";
import EmailDetails from "./EmailDetails/EmailDetails";
import EmailSummaryDefaultLayout from "../Defaults/EmailSummaryDefaultLayout";
import EmailDetailsDefaultLayout from "../Defaults/EmailDetailsDefaultLayout"; 

import { MessageContext } from "../../context/MessageContext";

import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";



// -----------------------------------------main code starts here----------------------------------------------------------
const Layout = () => {

    const path  = useLocation().pathname;
    const { folder, emailId } = useParams();

    const messages = useContext(MessageContext);

    const data = messages.filter((message) => message.folder === folder);

    


    return(
        <div className="flex h-full items-center justify-center">
            {
                path.includes("/main/email")
                    ?
                        <div className="flex h-full w-full items-center justify-center">
                            {/* email summary */}
                                {
                                folder 
                                    ? 
                                        <EmailSummary data={data} /> 
                                    : 
                                        <EmailSummaryDefaultLayout />
                                }

                            {/* email details */}
                                {
                                emailId 
                                    ?
                                    (<EmailDetails data={data} emailId={emailId} />) 
                                    :
                                    (<EmailDetailsDefaultLayout folder={folder} />)
                                }
                        </div> 
                    :
                        <DefaultLayout />
            }
        </div>
    )
};

export default Layout;


