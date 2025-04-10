import ProjectTitles from "../ProjectTitles.jsx";
import avatarsSideways from "../../assets/images/sign/avatars-sideways.png";
import letterB from "../../assets/images/sign/letter-b.png";
import prototypeAvatars from "../../assets/images/sign/protorype-avatars.png";
import avatars from "../../assets/images/sign/avatars.png";
import blackCorner from "../../assets/images/sign/black-corner.png";
import wireframeHome from "../../assets/images/sign/home.png";
import wireframeFlashcardsLesson from "../../assets/images/sign/lessons-flashcards.png";
import wireframeFlashcards1 from "../../assets/images/sign/ex-flashcards1.png";
import wireframeFlashcards2 from "../../assets/images/sign/ex-flashcards2.png";
import video from "../../assets/images/sign/sign-video.mp4";
import wireframeSpelling1 from "../../assets/images/sign/ex-spelling-mobile1.png";
import wireframeSpelling2 from "../../assets/images/sign/ex-spelling-mobile2.png";
import wireframeSpelling3 from "../../assets/images/sign/ex-spelling-mobile3.png";
import wireframeSpelling4 from "../../assets/images/sign/ex-spelling-mobile4.png";
import bg from "../../assets/images/sign/white-paper-texture.png";

function Gebarentaal() {


    return (
        <>
            <ProjectTitles
                title="Gebarentaal . February-March 2025"
                subtitle="Collaborative Academic Project"
                projectIdea="Project Idea"
                myWork="My Work"
                checkOut="CHECK OUT"
                firstDescription="The teachers of the Sign Language at Intake elective at Hogeschool Rotterdam requested a website/app to help their students learn sign language. My team and I started by creating a VSD (Values, Norms, Design Requirements, Value Hierarchy, Value Matrix) to outline our values and include them in the project."
                secondDescription="The platform requires users to log in with an active Hogeschool Rotterdam account and get permission from their teacher. Once logged in, students can access six features: Spelling, Flashcards, Grammar, Dictionary, Intake Tests (various versions), and Hard Words. My team worked on the front-end while collaborating with a back-end team. In the three weeks we had, we developed more than half of the features."
                firstText="My first task was creating wireframes. I designed the layouts, avatars, and a clickable prototype using Figma. I was also responsible for the website's design, which I built using Tailwind CSS."
                secondText="I worked with the back-end team to develop the Spelling feature. This tool uses a camera to recognize the letter signs shown by users, including moving ones, through an AI API designed by the back-end team and connected to the front-end."
                thirdText="Finally, I added finishing touches, like showing results in the Flashcards section, displaying how many words can be tested in one session, and making sure the words appear in random order. The entire project was built using React JS."
                link="https://github.com/Chrisssss15/TLE-2-Frontend"/>

            <section className="relative bg-white bg-cover bg-center" style={{backgroundImage: `url(${bg})`}}>
                {/*header*/}
                <div className="w-[100%] pt-[6vw] pb-[7vw]">
                    <div className="flex items-center justify-center text-[38vw] tracking-[0.5vw]">
                        <img src={avatarsSideways} className="h-[20vw] w-auto mr-[-0.55vw] mt-[-3vw]"/>
                        <h1 className="font-SlickyBohem leading-none">Ge </h1>
                        <img src={letterB} className="h-[29.5vw] w-auto mr-[-2vw] ml-[-2.5vw] mt-[-1.3vw]"/>
                        <h1 className="font-SlickyBohem leading-none">ar<span className="text-white folio text-[37.5vw]">e</span>n</h1>
                    </div>
                    <h3 className="font-Strawford tracking-widest text-center mt-[-5vw] text-[2.5vw]">TAAL</h3>
                </div>

                {/*mid div*/}
                <div className="flex text-[0.8vw] w-[100%]">
                    {/*avatars*/}
                    <div className="w-[50%] flex flex-col justify-center items-center py-[5vw]">
                        <img src={blackCorner} className="w-[10vw] absolute mb-[-36.62vw] mr-[-39.73vw]"/>
                        <div className="absolute flex flex-col gap-[2vw]">
                            <h2 className="font-SlickyBohem text-[4vw] tracking-[0.5vw] text-center">avatars</h2>
                            <div className="flex items-center gap-[2vw]">
                                <img src={prototypeAvatars} className="w-[19vw]"/>
                                <img src={avatars} className="w-[22vw]"/>
                            </div>
                        </div>

                    </div>

                    {/*desktop*/}
                    <div className="bg-blackBackground w-[50%] flex flex-col justify-center items-center pt-[5vw] pb-[5vw] rounded-tl-[10vw]">
                        <h2 className="font-SlickyBohem text-white text-[4vw] tracking-[0.5vw]">desktop</h2>
                        <div className="flex gap-[2vw]">
                            <img src={wireframeHome} className="w-[14vw] h-auto"/>
                            <div className="flex flex-col justify-between">
                                <img src={wireframeFlashcardsLesson} className="w-[11vw]"/>
                                <img src={wireframeFlashcards1} className="w-[11vw]"/>
                                <img src={wireframeFlashcards2} className="w-[11vw]"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*bottom div*/}
                <div className="flex justify-center bg-blackBackground text-[0.8vw] gap-[10vw] pt-[11vw] pb-[5vw]">
                    {/*ai spelling*/}
                    <div>
                        <h2 className="font-SlickyBohem text-white text-[4vw] tracking-[0.5vw] text-center">ai spelling</h2>
                        <div className="flex gap-[4vw] items-center">
                            <p className="text-[0.6vw] font-mono text-white leading-relaxed">
                                <span className="text-[#a365ae]">function</span> <span
                                className="text-[#7aa8b7]">scaleHandpose</span>(<span
                                className="text-[#c4741f]">landmarks</span>) &#123;<br/>
                                &nbsp;&nbsp;<span className="text-[#a365ae]">const</span> wrist = <span
                                className="text-[#c4741f]">landmarks</span>&#91;<span
                                className="text-[#c4741f]">0</span>&#93;;<br/>
                                &nbsp;&nbsp;<span className="text-[#a365ae]">const</span> indexFingerTip =
                                <span className="text-[#c4741f]">landmarks</span>&#91;<span
                                className="text-[#c4741f]">8</span>&#93;;<br/>
                                &nbsp;&nbsp;<span className="text-[#a365ae]">const</span> handSize = <span
                                className="text-[#7aa8b7]">Math</span>.<span
                                className="text-[#d1bd38]">sqrt</span>(<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7aa8b7]">Math</span>.<span
                                className="text-[#d1bd38]">pow</span>(indexFingerTip&#91;
                                <span className="text-[#c4741f]">0</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">0</span>&#93;, <span
                                className="text-[#c4741f]">2</span>)
                                +<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7aa8b7]">Math</span>.<span
                                className="text-[#d1bd38]">pow</span>(indexFingerTip&#91;
                                <span className="text-[#c4741f]">1</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">1</span>&#93;, <span className="text-[#c4741f]">2</span>)
                                +<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span><span className="text-[#7aa8b7]">Math</span></span>.<span
                                className="text-[#d1bd38]">pow</span>(indexFingerTip&#91;
                                <span className="text-[#c4741f]">2</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">2</span>&#93;, <span className="text-[#c4741f]">2</span>)
                                +<br/>
                                &nbsp;&nbsp;);<br/>
                                &nbsp;&nbsp;<span className="text-[#a365ae]">return</span> <span
                                className="text-[#c4741f]">landmarks</span><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#d1bd38]">map</span>((<span
                                className="text-[#c4741f]">point</span>) =&gt; &#91;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-[#c4741f]">point</span>&#91;
                                <span
                                    className="text-[#c4741f]">0</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">0</span>&#93;) / handSize,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-[#c4741f]">point</span>&#91;
                                <span
                                    className="text-[#c4741f]">1</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">1</span>&#93;) / handSize,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-[#c4741f]">point</span>&#91;
                                <span
                                    className="text-[#c4741f]">2</span>&#93; - wrist&#91;<span
                                className="text-[#c4741f]">2</span>&#93;) / handSize,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&#93;)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#d1bd38]">flat</span>();<br/>
                                &#125;
                            </p>
                            <video src={video} className="w-[20vw]" loop autoPlay muted/>
                        </div>
                    </div>

                    {/*mobile*/}
                    <div>
                        <h2 className="font-SlickyBohem text-white text-[4vw] tracking-[0.5vw] text-center">mobile</h2>
                        <div className="flex gap-[2vw]">
                            <img src={wireframeSpelling1} className="w-[7.85vw]"/>
                            <img src={wireframeSpelling2} className="w-[7.85vw]"/>
                            <img src={wireframeSpelling3} className="w-[7.85vw]"/>
                            <img src={wireframeSpelling4} className="w-[7.85vw]"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gebarentaal