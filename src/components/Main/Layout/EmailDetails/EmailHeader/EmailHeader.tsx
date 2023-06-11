import { IMessageContextValue } from "../../../../context/MessageContext";



interface IMyProps {
    email: IMessageContextValue;
};


// -----------------------------------------main code starts here----------------------------------------------------------
const EmailHeader = (props: IMyProps) => {

    const { email } = props;

    const formattedDates = (inputDate: string) => {
        const date = new Date(inputDate);
        const hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");
        const seconds = date.getUTCSeconds().toString().padStart(2, "0");
        const day = date.getUTCDate().toString().padStart(2, "0");
        const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
        const year = date.getUTCFullYear();
        return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
    };

    return(
        <div className='flex w-full justify-between'>
        <div className='flex gap-3'>
            <img src={email.from.avatarUrl} alt='' className='h-10 rounded-[50%]' />
            <div className='flex flex-col items-start justify-start'>
                <strong>{email.from.name}</strong>
                <p className='text-sm text-gray-500'>{email.from.email}</p>
            </div>
        </div>
        <div className='flex items-center gap-3'>
            <p>{formattedDates(email.timestamp)}</p>
            <button className='rounded bg-buttonReply px-4 py-2 text-white shadow-md'>Reply</button>
            <button className='rounded border border-greenOutline px-4 py-2 text-greenOutline shadow-md'>
                Forward
            </button>
            <button className='rounded border border-redOutline px-4 py-2 text-redOutline shadow-md'>Delete</button>
        </div>
    </div>
    )
}

export default EmailHeader;