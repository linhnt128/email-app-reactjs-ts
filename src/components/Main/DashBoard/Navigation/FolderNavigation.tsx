import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse,
    faEnvelope,
    faUser,

} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';




// -----------------------------------------main code starts here----------------------------------------------------------
const FolderNavigation = () => {

    

    return(

            <div className="max w-1/5 h-full bg-midnight">
                <div className="flex flex-col items-center justify-start text-white">
                    <NavLink to="home" className="flex w-full h-14 items-center justify-center font-light text-md focus:bg-linksHighlight">
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                    <NavLink to="/main/email" className="flex w-full h-14 items-center justify-center font-light text-md focus:bg-linksHighlight active:bg-linksHighlight">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                    <NavLink to="contact" className="flex w-full h-14 items-center justify-center font-light text-md focus:bg-linksHighlight">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                </div>
            </div>
    )
}

export default FolderNavigation;

