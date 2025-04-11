import React from "react";
import './style.css';
import Nav from "./components/Nav.jsx";
import meyImg from "../src/assets/images/layout/about-me.png";
import miniLogo from "../src/assets/images/layout/chrome-logo.png";
import figma from "../src/assets/images/layout/figma-logo-progress.png";
import html from "../src/assets/images/layout/html-logo-progress.png";
import css from "../src/assets/images/layout/css-logo-progress.png";
import js from "../src/assets/images/layout/js-logo-progress.png";
import php from "../src/assets/images/layout/php-logo-progress.png";
import ps from "../src/assets/images/layout/ps-logo-progress.png";
import ai from "../src/assets/images/layout/ai-logo-progress.png";
import id from "../src/assets/images/layout/id-logo-progress.png";
import aseprite from "../src/assets/images/layout/aseprite-logo-progress.png";
import autocad from "../src/assets/images/layout/autocad-logo-progress.png";
import book from "../src/assets/images/layout/reading-invert.png";
import art from "../src/assets/images/layout/painting-invert1.png";
import events from "../src/assets/images/layout/event-invert.png";
import travel from "../src/assets/images/layout/sign-invert.png";

function About() {
    return (
        <>
            <Nav className="z-5"/>
            <div className="bg-blackBackground px-[8vw]">
                {/*About me start*/}
                <section className="flex gap-[3vw] items-center">
                    <div className="w-[49vw] flex flex-col gap-[2.5vw] mt-[2vw]">
                        <div className="text-right flex flex-col items-end mr-[20vw]">
                            <h1 className="font-Estonia text-white text-[13vw] leading-none mt-[-1vw]">HEY</h1>
                            <h2 className="text-myGreen font-Dhyna font-bold text-[2.77vw] mb-[-0.3vw]">I'm Milanela
                                Milanova</h2>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw] w-[24vw] leading-[2.2vw]">I've
                                always been artistic, whether through art, designing, or developing, and this passion
                                now drives my motivation to create and code for others. I believe that great design
                                gives personality to every website or product—it should be crafted with care, thought,
                                and attention to detail. Through open communication, I aim to ensure every project feels
                                personal and truly reflects the needs and vision of the client and target audience.</p>
                        </div>
                        <div>
                            <h2 className="text-myGreen font-Dhyna font-bold text-[2.85vw]">Languages</h2>
                            <div className="flex items-center gap-[1vw] pt-[0.5vw]">
                                <img src={miniLogo} className="w-auto h-[2.2vw]"/>
                                <p className="font-HelveticaNeueL text-white text-[1.05vw] leading-[2.2vw]">Bulgarian -
                                    Native</p>
                            </div>
                            <div className="flex items-center gap-[1vw] pt-[0.5vw]">
                                <img src={miniLogo} className="w-auto h-[2.2vw]"/>
                                <p className="font-HelveticaNeueL text-white text-[1.05vw] leading-[2.2vw]">English -
                                    Advanced</p>
                            </div>
                            <div className="flex items-center gap-[1vw] pt-[0.5vw]">
                                <img src={miniLogo} className="w-auto h-[2.2vw]"/>
                                <p className="font-HelveticaNeueL text-white text-[1.05vw] leading-[2.2vw]">Dutch -
                                    Upper-Intermediate</p>
                            </div>
                        </div>
                        <div className="ml-[28vw]">
                            <h2 className="text-myGreen font-Dhyna font-bold text-[2.85vw]">Education</h2>
                            <p className="font-HelveticaNeueL text-white text-[1.3vw] leading-[3vw]">2023-2027</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Creative Media & Game Technology<br/>Rotterdam
                                University of Applied Sciences </p>
                        </div>
                        <div>
                            <h2 className="text-myGreen font-Dhyna font-bold text-[2.85vw]">Experience</h2>
                            <p className="font-HelveticaNeueL text-white text-[1.3vw] leading-[3vw]">From December
                                2024</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Board of Directors of Study
                                Association CAIT<br/>Rotterdam University of Applied Sciences</p>
                        </div>
                        {/*<a*/}
                        {/*    className="w-[7vw] ml-[75vw] rounded-full border-[0.2vw] border-myGreen mt-[-9vw]"*/}
                        {/*    href="/public/CV-Milanela-Milanova.pdf"*/}
                        {/*    download*/}
                        {/*>*/}
                        {/*    <span className="text-white font-DhynaBold text-[4vw] px-[0.6vw] leading-relaxed hover:text-ohGrey">*/}
                        {/*        CV*/}
                        {/*    </span>*/}
                        {/*</a>*/}

                    </div>
                    <img src={meyImg} className="w-[52vw] h-auto ml-[-20vw]"/>
                </section>

                {/*Software*/}
                <section className="flex flex-col justify-center w-[84vw] mt-[6vw]">
                    <h2 className="text-myGreen font-Dhyna font-bold text-[2.77vw] text-center">Software</h2>
                    <div className="flex justify-between mt-[2vw]">
                        <img src={figma} className="w-[13vw] h-full"/>
                        <img src={html} className="w-[13vw] h-full"/>
                        <img src={css} className="w-[13vw] h-full"/>
                        <img src={js} className="w-[13vw] h-full"/>
                        <img src={php} className="w-[13vw] h-full"/>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                        <img src={ps} className="w-[13vw] h-full"/>
                        <img src={ai} className="w-[13vw] h-full"/>
                        <img src={id} className="w-[13vw] h-full"/>
                        <img src={aseprite} className="w-[13vw] h-full"/>
                        <img src={autocad} className="w-[13vw] h-full"/>
                    </div>
                </section>
                {/*Skilld & Goals*/}
                <section className="flex items-start w-[75vw] justify-center gap-[10vw] mt-[10vw]">
                    <div className="w-[25vw]">
                        <h2 className="text-myGreen font-Dhyna font-bold text-[2.77vw] text-right">Personal Skills</h2>
                        <p className="text-white font-Dhyna text-[1.15vw] text-right">DETAIL-ORIENTED</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-left">SELF-MOTIVATED</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-left">GREAT LISTENING SKILLS</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-left">VISIONARY THINKING</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-right">FAST LEARNING</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-right">CREATIVE PROBLEM SOLVING</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-right">DESIGN ORIANTATED MIND</p>
                        <p className="text-white font-Dhyna text-[1.15vw] text-right">COMMUNICATION SKILLS WITH ALL
                            AGES</p>
                    </div>
                    <div className="w-[25vw] flex flex-col gap-[2.5vw]">
                        <h2 className="text-myGreen font-Dhyna font-bold text-[2.77vw]">Goals</h2>
                        <div className="flex gap-[1vw] items-center">
                            <img src={miniLogo} className="h-[2.5vw] w-auto"/>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Continuously experiment with new
                                art and design styles, exploring diverse media.</p>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                            <img src={miniLogo} className="h-[2.5vw] w-auto"/>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Focus on improving my front-end
                                development and animation coding techniques.</p>
                        </div>
                    </div>
                </section>
                {/*Reflection of me*/}
                <section className="flex flex-col items-start justify-center w-[80vw] mt-[10vw] pb-[7vw]">
                    <h2 className="w-[80vw] text-myGreen font-Dhyna font-bold text-[2.77vw] text-center pb-[2.5vw]">A
                        relfection of my personality</h2>
                    <div className="w-[80vw] flex items-start justify-between">
                        <div className="flex flex-col justify-center text-center w-[15vw]">
                            <img src={book} className="h-[11vw] w-auto max-w-full object-contain"/>
                            <p className="text-white font-Dhyna text-[1.15vw] leading-[3vw]">READING</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">All the way from psychology to
                                classics books</p>
                        </div>
                        <div className="flex flex-col justify-center text-center w-[15vw]">
                            <img src={art} className="h-[11vw] w-auto max-w-full object-contain"/>
                            <p className="text-white font-Dhyna text-[1.15vw] leading-[3vw]">ART</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Painting, drawing, sketches,
                                digital art, museums e.t.</p>
                        </div>
                        <div className="flex flex-col justify-center text-center w-[15vw]">
                            <img src={events} className="h-[11vw] w-auto max-w-full object-contain"/>
                            <p className="text-white font-Dhyna text-[1.15vw] leading-[3vw]">EVENTS</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">Attending presentations, art
                                exhibits, concerts festivals. Give me</p>
                        </div>
                        <div className="flex flex-col justify-center text-center w-[15vw]">
                            <img src={travel} className="h-[11vw] w-auto max-w-full object-contain"/>
                            <p className="text-white font-Dhyna text-[1.15vw] leading-[3vw]">TRAVELING</p>
                            <p className="font-HelveticaNeueL text-white text-[1.05vw]">An inspiration for new
                                perspectives</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About