import { IMessageContextValue } from "../../../../context/MessageContext";



interface IMyProps {
    email: IMessageContextValue;
};

// -----------------------------------------main code starts here----------------------------------------------------------
const EmailContent = (props: IMyProps) => {

    const { email } = props;

    return(
        <div className="flex flex-col justify-start items-start">
            <div className="h-auto">
                <h2 className="my-8 text-4xl font-bold h-full">{email.main.title}</h2>
            </div>
            <p className="border-solid border-emailBorder border-b font-semibold text-left pb-8">{email.main.content}</p>
        </div>
    )
}

export default EmailContent;