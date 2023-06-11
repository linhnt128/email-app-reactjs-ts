import EmailHeader from "./EmailHeader/EmailHeader";
import EmailContent from "./Content/EmailContent";
import { IMessageContextValue } from "../../../context/MessageContext";




interface IMyProps {
    emailId: string | undefined;
    data: IMessageContextValue[]
};




// -----------------------------------------main code starts here----------------------------------------------------------
const EmailDetails = (props: IMyProps) => {
    const { emailId, data } = props;
    const email = data.find((item) => item.id === emailId)!;

    

    return(
        <div className="flex h-full w-3/4 flex-col items-start p-7">
            <EmailHeader email={email}/>
            <EmailContent email={email}/>
        </div>
    )
};

export default EmailDetails;