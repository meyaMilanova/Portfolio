import React, { useState, useEffect } from "react";
import './style.css';
import Nav from "./components/Nav.jsx";
import miniImg from "../src/assets/images/layout/between-text-img.png";
import GaiaPark from "./components/projects/GaiaPark.jsx";
import OpenHiring from "./components/projects/OpenHiring.jsx"
import Gebarentaal from "./components/projects/Gebarentaal.jsx";
import ObsessiveStudio from "./components/projects/ObsessiveStudio.jsx";
import SchieZoFriends from "./components/projects/Schie-zo-friends.jsx";
import ExploreTheMyth from "./components/projects/ExploreTheMyth.jsx";
import PostersTries from "./components/projects/PostersTries.jsx";
import MusicMagasine from "./components/projects/MusicMagasine.jsx";
import PWS from "./components/projects/PWS.jsx";



function Projects() {


    return (
        <>
            <Nav />
            {/* Links */}
            <section className="px-[5vw] w-[90vw] flex flex-col py-[3vw] h-[85vh] justify-center">
                <div className="w-[90vw] flex flex-col">
                    <a className="font-Dhyna text-white text-[7vw] leading-[7vw]" href="#code">CODE
                        <span className="font-ImperialScript text-[7.5vw]"> &</span> WEB DESIGN</a>
                    <div className="flex w-[90vw] justify-between items-center">
                        <a className="font-Dhyna text-white text-[7vw] leading-[8.5vw]" href="#web-design">WEB DESIGN</a>
                        <img src={miniImg} className="h-[5.6vw] w-auto mb-[-0.5vw]" />
                        <a className="font-Dhyna text-white text-[7vw] leading-[8.5vw]" href="#games">GAMES</a>
                    </div>
                    <a className="font-Dhyna text-white text-[7vw] leading-[8.5vw] w-[90vw] text-center" href="#graphic-design">GRAPHIC
                        DESIGN</a>
                    <a className="font-Dhyna text-white text-[7vw] leading-[8.5vw] w-[90vw] text-right" href="#3d-models">
                        <span className="font-ImperialScript text-[8vw]" >3</span>D MODELS</a>
                </div>
            </section>

            {/* CODE & WEB DESIGN */}
            <section className="pt-[13vw]" id="code">
                <h2 className="font-Dhyna text-white text-[8vw] text-right pr-[5.5vw] mb-[0vw]">CODE & WEB DESIGN</h2>
                <GaiaPark/>
                <OpenHiring/>
                <Gebarentaal/>

            </section>

            {/* WEB DESIGN */}
            <section className="pt-[25vw]" id="web-design">
                <h2 className="font-Dhyna text-white text-[8vw] text-right pr-[5.5vw] mb-[0vw]">WEB DESIGN</h2>
                <ObsessiveStudio/>
            </section>

            {/* GAMES */}
            <section className="pt-[25vw]" id="games">
                <h2 className="font-Dhyna text-white text-[8vw] text-right pr-[5.5vw] mb-[0vw]">GAMES</h2>
                <SchieZoFriends/>
                <ExploreTheMyth/>
            </section>

            {/* GRAPHIC DESIGN */}
            <section className="pt-[25vw]" id="graphic-design">
                <h2 className="font-Dhyna text-white text-[8vw] text-right pr-[5.5vw] mb-[0vw]">GRAPHIC DESIGN</h2>
                <PostersTries/>
                <MusicMagasine/>
            </section>

            {/* 3D MODELS */}
            <section className="pt-[25vw]" id="3d-models">
                <h2 className="font-Dhyna text-white text-[8vw] text-right pr-[5.5vw] mb-[0vw]">3D MODELS</h2>
                <PWS/>
            </section>


        </>
    );
}

export default Projects;
