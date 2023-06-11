import constructionImg from "../../../assets/images/under-construction.png";



// -----------------------------------------main code starts here----------------------------------------------------------
const DefaultLayout = () => {

    return(
        <div className="flex justify-center items-center h-full">
            <img src={constructionImg} className="" alt="construction" />
        </div>
    )
};

export default DefaultLayout;