
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const HomePage = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 py-10 sm:px-8 lg:px-20 lg:py-20">
                <div className="leftSide w-full lg:w-1/2 p-4 sm:p-10 dark:text-white flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00246B] mb-4 sm:mb-6 ml-2 sm:ml-7">
                        HomeMaid
                    </h1>
                    
                    <p className="m-2 sm:m-5 mt-6 sm:mt-12 text-lg sm:text-2xl md:text-3xl text-black leading-7 sm:leading-9 font-medium">
                        Your trusted platform to hire reliable maids and househelps for all
                        your household chores. Book services easily and pay as per the rates
                        mentioned, all from the comfort of your home.
                    </p>

                    <div className="flex gap-4 sm:gap-8 mt-6 sm:mt-10 ml-2 sm:ml-10">

                        <Button content="Login" onClick={() => navigate("/login")} />

                        <Button content="Sign Up"/>
                    </div>
                </div>

                <div className="rightSide w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                    <img
                        src="../src/assets/icons/FrontMaid.png"
                        alt="Maid_Depiction"
                        className="w-4/5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;