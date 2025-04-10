import React from "react";
import './style.css'
import Nav from "./components/Nav.jsx";
import plant from "../src/assets/images/layout/plant-invert.png"

function Contact() {
    return (
        <>
            <div className="flex flex-col justify-between h-screen">
                <Nav/>
                <div className="font-Dhyna text-white bg-blackBackground text-[10vw] pl-[10vw]">
                    <h1 className="leading-none">GET IN</h1>
                    <h1 className="leading-tight pl-[17vw]">TOUCH</h1>
                </div>
                <div
                    className="bg-blackBackground flex pb-[13vh] pt-[5vh] w-[100%] justify-between px-[10vw] leading-loose text-[1vw]">

                    <div className="flex">
                        <div className="font-HelveticaNeueL text-white pr-[8vw]">
                            <p>E-mail:<br/>LinkedIn:<br/>GitHub:</p>
                        </div>
                        <div className="font-HelveticaNeueL text-white text-end items-end">
                            <p>milanela.milanova@gmail.com<br/>Milanela Milanova<br/>meyaMilanova</p>
                        </div>
                    </div>
                    <img src={plant} className="w-[20vw] mt-[-19vw] object-cover"/>
                </div>
            </div>
        </>
    );
}

export default Contact