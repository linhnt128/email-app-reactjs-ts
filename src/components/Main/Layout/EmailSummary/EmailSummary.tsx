import { NavLink } from "react-router-dom";
import { IMessageContextValue } from "../../../context/MessageContext";
import { memo, useState, useEffect } from 'react';




interface IMyProps {
    data: IMessageContextValue[]
};


// -----------------------------------------main code starts here----------------------------------------------------------
const EmailSummary = (props: IMyProps) => {
    const { data } = props;
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);



    const formatDateAndSort = (dates: string[]) => {
        const compareDates = (date1: string, date2: string) => {
            const [day1, month1, year1] = date1.split('/');
            const [day2, month2, year2] = date2.split('/');

            
            if (year1 !== year2) {
                return parseInt(year1, 10) - parseInt(year2, 10);
            }

            
            if (month1 !== month2) {
                return parseInt(month1, 10) - parseInt(month2, 10);
            }

            
            return parseInt(day1, 10) - parseInt(day2, 10);
        };

        const formattedDates = dates.map((inputDate) => {
            const date = new Date(inputDate);
            const day = date.getUTCDate();
            const month = date.getUTCMonth() + 1;
            const year = date.getUTCFullYear();
            return `${day}/${month}/${year}`;
        });

        const sortedDates = formattedDates.sort(compareDates);
        return sortedDates;
    };

    const sortedData = [...data].sort((a, b) => {
        const sortedDates = formatDateAndSort([a.timestamp, b.timestamp]);
        return sortedDates[0] === formatDateAndSort([a.timestamp])[0] ? -1 : 1;
    });
      

    const handleItemClick = (itemId: string) => {
        if (selectedItemId === itemId) {
            setSelectedItemId(null); 
        } else {
            setSelectedItemId(itemId);
        }
    };


    useEffect(() => {


        return () => {
            setSelectedItemId(null); 
        };
    }, []);


    return(
        <>
            {
                <div className="h-full w-1/4 overflow-scroll">
                    {
                        sortedData.map((item, index) => 
                        (
                                <NavLink 
                                    className="flex bg-white p-4 gap-4 w-full border-b border-emailBorder cursor-pointer"
                                    key={item.id}
                                    to={"/main/email/" + item.folder + "/" + item.id}
                                    style={item.unread === true ? { backgroundColor: 'rgb(229,231,235)' } : {}}
                                    // onClick={() => (item.unread = false)}
                                    onClick={() => {
                                        handleItemClick(item.id);
                                        item.unread = false;
                                    }}
                                >
                                        {/* avatar */}
                                        <div className="w-1/6">
                                            <img src={ item.from.avatarUrl } alt="avatar-email-summary" className="rounded-full w-10 h-10" />
                                        </div>
                                        {/* email summary */}
                                        <div className="w-5/6">
                                            <div className={`flex justify-between w-full text-sm ${selectedItemId === item.id ? "text-white" : ""} text-emailSummaryHead font-medium`}>
                                                <p className="">
                                                    { item.from.name }
                                                </p>
                                                <p className="">
                                                    { formatDateAndSort([item.timestamp]) }
                                                </p>
                                            </div>
                                                <h6 className={`line-clamp-1 font-bold ${selectedItemId === item.id ? "text-white" : ""} text-black text-md w-full my-2 text-left`}>{ item.main.title }</h6>
                                                <p className={`font-semibold ${selectedItemId === item.id ? "text-white" : ""} text-emailSummaryHead text-sm w-full line-clamp-3 text-left`}>{ item.main.content }</p>
                                        </div>
                                </NavLink>
                        ))
                    }
                </div>
            }
        </>
    );
};

export default memo(EmailSummary);

