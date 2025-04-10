import ProjectTitles from "../ProjectTitles.jsx";
import us from "../../assets/images/schieZoFriends/2fa76785-0338-41ef-8179-7b16b4cb68a6.jpg";
import ogMap from "../../assets/images/schieZoFriends/04_Schiecentrale_©Ossip_edit-Large.jpg";
import meAndMing from "../../assets/images/schieZoFriends/20240621_103229.jpg";
import appartement1 from "../../assets/images/schieZoFriends/appartment4.png";
import appartement2 from "../../assets/images/schieZoFriends/appartment5.png";
import characters from "../../assets/images/schieZoFriends/characters.png";
import colourPalette from "../../assets/images/schieZoFriends/colour-palette.png";
import ogStairs from "../../assets/images/schieZoFriends/IMG_8585.jpg";
import sketch1 from "../../assets/images/schieZoFriends/IMG_9685.jpg";
import sketch2 from "../../assets/images/schieZoFriends/IMG_9686.jpg";
import sketch3 from "../../assets/images/schieZoFriends/IMG_9747.jpg";
import intro from "../../assets/images/schieZoFriends/introScene.png";
import drawnStairs from "../../assets/images/schieZoFriends/level3scene1.png";
import drawnMap from "../../assets/images/schieZoFriends/schiecentralebeter.png";
import killer from "../../assets/images/schieZoFriends/elisa-sheet.png";
import killer1 from "../../assets/images/schieZoFriends/elisa-sheet-1.png";
import killer2 from "../../assets/images/schieZoFriends/elisa-sheet-2.png";
import killer3 from "../../assets/images/schieZoFriends/elisa-sheet-3.png";
import killer4 from "../../assets/images/schieZoFriends/elisa-sheet-4.png";
import killer5 from "../../assets/images/schieZoFriends/elisa-sheet-5.png";
import killer6 from "../../assets/images/schieZoFriends/elisa-sheet-6.png";

import video from "../../assets/images/schieZoFriends/WhatsApp Video 2025-04-06 at 21.16.15.mp4";
import {useEffect, useState} from "react";


function ImageSwitcher() {
    const images = [appartement1, appartement2];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <img
            src={images[current]}
            alt="Appartement"
            className="w-[25vw]"
        />
    );
}


function SpriteAnimation() {
    const images = [killer, killer1, killer2, killer3, killer4, killer5, killer6];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (


        <img
            src={images[current]}
            alt="Appartement"
            className="w-[7vw] h-[24vw] object-cover object-center"
        />
    )
        ;
}


function SchieZoFriends() {

    return (
        <>
            <ProjectTitles
                title="Schie-zo-friends . June 2024"
                subtitle="Collaborative Academic Project"
                projectIdea="Project Idea"
                myWork="My Work"
                checkOut="CHECK OUT"
                firstDescription="The theme of this pixel art game is the Schiecentrale location in Rotterdam. My team and I chose a seagull as the main character because there were so many seagulls at the location."
                secondDescription="The story: A boy loses a page from his book, and the players — as the seagull — needs to find it and return it. But during the journey, the seagull witnesses a murder. From there, the goal shifts to helping the police catch the killer, which becomes the final boss fight. To get there, players explore the Schiecentrale area, collect clues, and figure out how to win."
                thirdDescription="The game is a co-op experience where two players control the seagull together. One player controls the right jump, the other controls the left. Pressing both buttons at the same time makes the seagull fly upward. All backgrounds were hand-drawn based on the real Schiecentrale."
                firstText="I played a big role in shaping the story and structure of the game. During the concept phase, I helped create many of the sketches and ideas."
                secondText="The game was built using  the Excalibur engine. I was responsible for coding the entire boss fight. I also drew several characters and scenes in Aseprite and animated the killer and apartment scene using Aseprite and Excalibur to bring more life into the game."
                thirdText="I also created the ground tiles where the main character walks, using the tool Tiled and the correct tile assets. To keep the visuals consistent, I made the game’s color palette as well."
                link="https://surelynobody161.github.io/cle4/"
            />

            <section className="flex flex-col gap-[7vw]">
                <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                    <h2 className="text-myGreen text-[2vw] font-DhynaBold">Creating the Idea</h2>
                    <div className="flex justify-center items-center gap-[1.5vw] flex-wrap">
                        <img src={meAndMing} className="w-[27vw] h-[22vw] object-cover object-center"/>
                        <img src={sketch1} className="h-[22vw]"/>
                        <img src={sketch2} className="h-[22vw]"/>
                        <img src={sketch3} className="h-[22vw]"/>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[7vw]">
                    <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Level 3 - Scene 1</h2>
                        <div className="flex flex-col justify-center items-center gap-[1vw] flex-wrap">
                            <img src={ogStairs} className="w-[25vw]"/>
                            <img src={drawnStairs} className="w-[25vw]"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Game Lobby</h2>
                        <div className="flex justify-center items-center gap-[1vw] flex-wrap">
                            <img src={ogMap} className="w-[25.5vw]"/>
                            <img src={drawnMap} className="w-[28.5vw]"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-start gap-[7vw] flex-wrap">
                    <div className="flex flex-col justify-between items-center gap-[3vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Color Palette</h2>
                        <img src={colourPalette} className="w-[25vw]"/>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-[2vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Characters</h2>
                        <div className="flex justify-center items-center gap-[2vw]">
                            <img src={characters} className="w-[35vw]"/>
                            <div className="flex justify-center items-center">
                                <SpriteAnimation/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center gap-[7vw] flex-wrap">
                    <div className="flex flex-col justify-between items-center gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Appartement</h2>
                        <div className="flex justify-center items-center">
                            <ImageSwitcher/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Intro</h2>
                        <img src={intro} className="w-[28.3vw]"/>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Boss Fight</h2>
                        <video
                            src={video}
                            className="w-[55vw] h-[34.6vw] object-cover object-left"
                            loop
                            autoPlay
                            muted
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SchieZoFriends;
