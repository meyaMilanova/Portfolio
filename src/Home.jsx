import React, { useEffect } from "react";
import './style.css';
import swirl from '../src/assets/images/layout/swirl-home.png';
import Nav from "./components/Nav.jsx";
import chromeDot from '../src/assets/images/layout/50821167791.png';
import coffee from "../src/assets/images/layout/coffee-invert.png";

function Home() {
    // Set overflow hidden when the component is mounted
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Clean up to reset overflow when leaving the home page
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="flex flex-col justify-between h-screen">
            <Nav/>

            <div className="flex justify-center items-center">
                <header className="relative w-[80vw] h-[37vw]">
                    <h1 className="absolute inset-0 text-white font-Kirgina text-[36vw] leading-tight flex items-center justify-start pl-[3vw] animate-port-in">
                        P<span className="text-white font-Balfira text-[34vw] mt-[-3vw]">O</span>RT
                    </h1>

                    <h1 className="folio absolute inset-0 text-myGreen font-Agnes text-[17vw] leading-none flex items-end justify-center pl-[3vw] mb-[-0.38vw] animate-folio-in">
                        FOLI
                    </h1>

                    <div
                        className="absolute bg-blackBackground h-[5vw] w-[5vw] mt-[15.5vw] ml-[55.5vw] animate-small-black-box-in"></div>
                    <div
                        className="absolute bg-myGreen rounded-full h-[2.5vw] w-[2.4vw] mt-[17.2vw] ml-[56.73vw] animate-green-ball-in"></div>

                    <img src={coffee}
                         className="absolute rounded-full bg-blackBackground object-cover h-[12.5vw] w-auto mt-[21vw] ml-[59.6vw] animate-coffee-img"/>
                </header>
            </div>

            <div className="flex justify-between items-end bg-blackBackground">
                <h2 className="text-[1.2vw] font-Dhyana tracking-wider text-white pl-[5vw] pb-[4vw] animate-left-in">MILANELA
                    MILANOVA</h2>
                <h2 className="text-[1.2vw] font-Dhyana tracking-wider text-white pr-[5vw] pb-[4vw] animate-right-in">STUDENT</h2>
            </div>

        </div>
    );
}

export default Home;
