import ProjectTitles from "../ProjectTitles.jsx";
import tiles from "../../assets/images/escapeTheMyth/TileSetidktest4 - Copy.png";
import decor from "../../assets/images/escapeTheMyth/tilesettwo-export.png";
import logo from "../../assets/images/escapeTheMyth/The robot-Recovered.png";
import babaYaga from "../../assets/images/escapeTheMyth/broomstick witch cross stitch chart-Recovered-export.png";
import fuit from "../../assets/images/escapeTheMyth/images (7)-Recovered-export.png";
import mc from "../../assets/images/escapeTheMyth/MainChar-Recovered-sheet-export.png";
import samodiva from "../../assets/images/escapeTheMyth/Samodivas (1) (1).png";
import kuker from "../../assets/images/escapeTheMyth/images (1)1-Recovered-export.png";
import scene1 from "../../assets/images/escapeTheMyth/IntroBG3 (1).png";
import scene2 from "../../assets/images/escapeTheMyth/IntroBG4 (1).png";
import lost from "../../assets/images/escapeTheMyth/lost (1).png";
import won from "../../assets/images/escapeTheMyth/won (1).png";


function ExploreTheMyth() {

    return (
        <>
            <ProjectTitles
                title="Explore The Myth . July 2024"
                subtitle="Personal Academic Project"
                projectIdea="Project Idea"
                myWork="My Work"
                checkOut="CHECK OUT"
                firstDescription="Explore the Myth is the first game I ever created, inspired by Bulgarian mythology. The game’s theme revolves around mythical beings and creatures from Bulgarian folklore. Baba Yaga is the main antagonist, and she’s trying to catch you. The main character is a Samodiva. To escape, players must interact with other beings, gather clues, and determine whether their Samodiva sister or other strangers want to help them. The game was developed using Excalibur."
                secondDescription="This project is especially meaningful to me because it represents the Bulgarian myths I grew up with, and I’m proud of the art and cultural elements I was able to incorporate."
                firstText="I began by designing and drawing the tiles and decorative elements for the map. I then built the map in Tiled, using my custom-made tiles and decorations. Throughout the game, I incorporated subtle nods to my childhood in Bulgaria, particularly in the decorative details."
                secondText="One example is the game’s logo, which features a small television figure with the Bulgarian flag displayed on its screen. The characters in the game are all animated and designed to resemble their mythological origins, ensuring they are easily recognizable."
                thirdText="I also created intro scenes to guide players on which characters to trust and designed two different endings: one for being caught and another for successfully escaping. All artwork, including tiles, characters, animations, and scenes, was created by me in Aseprite."
                link="https://meyamilanova.github.io/ExploreTheMyth/"
            />

            <section className="flex flex-col gap-[8vw]">
                <div className="flex items-start justify-center gap-[7vw]">
                    <div className="flex flex-col items-center justify-between gap-[1.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Map Art</h2>
                        <div className="flex items-center gap-[1.5vw]">
                            <img src={tiles} className="w-[22vw]"/>
                            <img src={decor} className="w-[18vw]"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-[3.5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Logo</h2>
                        <img src={logo} className="w-[10vw]"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1.5vw]">
                    <h2 className="text-myGreen text-[2vw] font-DhynaBold">Characters</h2>
                    <div className="flex justify-center items-baseline mt-[-7vw]">
                        <img src={babaYaga} className="w-[19vw]"/>
                        <img src={fuit} className="w-[12vw] ml-[-2vw]"/>
                        <img src={mc} className="w-[8vw]"/>
                        {/*<img src={samodiva} className="w-[6vw]"/>*/}
                        <img src={kuker} className="w-[14vw]"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1.5vw]">
                    <h2 className="text-myGreen text-[2vw] font-DhynaBold">Scenes</h2>
                    <div className="flex gap-[1.5vw]">
                        <img src={scene1} className="w-[25vw]"/>
                        <img src={scene2} className="w-[25vw]"/>
                    </div>
                    <div className="flex gap-[1.5vw]">
                        <img src={lost} className="w-[25vw]"/>
                        <img src={won} className="w-[25vw]"/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExploreTheMyth;