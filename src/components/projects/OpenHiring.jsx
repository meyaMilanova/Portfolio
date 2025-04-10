import ProjectTitles from "../ProjectTitles.jsx";
import wireframeHome from "../../assets/images/openHiring/wireframe-home.png";
import wireframeDetail from "../../assets/images/openHiring/wireframe-details.png";
import logoOH from "../../assets/images/openHiring/logo-oh.png";
import profilePhoto from "../../assets/images/openHiring/profile-icon.png";
import animation from "../../assets/images/openHiring/animation.mp4";
import logoIO from "../../assets/images/openHiring/io-logo.png";
import zoomFunction from "../../assets/images/openHiring/font-size.png";
import soundIcon from "../../assets//images/openHiring/sound-icon.png";
import wireframeQuiz1 from "../../assets/images/openHiring/wireframe-quiz1.png";
import wireframeQuiz2 from "../../assets/images/openHiring/wireframe-quiz2.png";
import wireframeResult from "../../assets/images/openHiring/wireframe-result.png";
import swirlLine from "../../assets/images/openHiring/swirl-line.png";
import normalLine from "../../assets/images/openHiring/normal-line.png";



function OpenHiring() {


    return (
        <>
            <ProjectTitles
                title="Open Hiring . November-December 2024"
                subtitle="Collaborative Academic Project"
                projectIdea="Project Idea"
                myWork="My Work"
                checkOut="CHECK OUT"
                firstDescription="This project was assigned by iO Digital, tasking us with developing a website for Open Hiring—a hiring company that eliminates stereotypes and biases. Applicants remain anonymous during the hiring process, and the first person on the waiting list who applies gets the job. Companies can specify their preferences for new employees, and candidates decide for themselves if they meet the criteria. Applicants can write their name by signing in, but only they will be able to see it, ensuring their anonymity throughout the process."
                firstText="My team and I used the vier dagen  Sprint method to develop our idea. We followed the steps of Map, Sketch (using Crazy 8’s and Big Ideas), Decide, Prototype, and Test. The mobile website followed the core concept: anonymous applications where the first applicant is hired. To make it more accessible, we added additional features, and I was responsible for several of them."
                secondText="I developed a Talent Discovery Test, which uses 10 questions to determine if a person is more of a Creative, Leader, Organizer, or Supporter. Built in Laravel, this feature calculates percentages, saves results in a database, and allows users to review their outcomes later. I also implemented a translator function using the Google Translate API, enabling users to switch from the default Dutch language to one they understand."
                thirdText="Additional contributions included creating an animated congratulations message for successful applicants using JavaScript and designing the mobile website. I first created the design in Figma and then coded it with Tailwind CSS."
                link="https://github.com/Priy4s/TLE_1_Agency"
            />

            <section className="bg-white flex h-[55vw]">
                {/*wireframe left*/}
                <div className="flex h-[55vw] w-[21vw]">
                    <div className="absolute flex">
                        <div className="absolute bg-ohGreen w-[17vw] h-[55vw]"></div>
                        <div className="absolute bg-ohGreen ml-[17vw] mt-[15vw] w-[4vw] h-[40vw] rounded-tr-[5vw]"></div>
                        <div className="absolute bg-white ml-[12.5vw] w-[7.5vw] h-[15vw] rounded-bl-[5vw]"></div>
                    </div>
                    <img src={wireframeHome} className="absolute w-[8vw] h-auto object-contain mt-[1.5vw] ml-[3vw]"
                         style={{boxShadow: "-0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.4)",}}/>
                    <img src={wireframeDetail} className="absolute w-[8vw] h-auto object-contain mt-[18vw] ml-[10vw]"
                         style={{boxShadow: "-0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.4)",}}/>
                </div>

                <div className="flex flex-col">
                    {/*top logo...*/}
                    <div className="flex h-[15vw] w-[82vw] ml-[-6vw] z-40 justify-between items-center">
                        <img src={logoOH} className="w-[13vw] h-auto object-contain"/>
                        <div className="">
                            <img src={profilePhoto} className="w-[6vw] h-auto object-contain"/>
                            <p className="font-RadikalB text-black text-[1.7vw]">Username:
                                <span className="text-ohGrey font-Radikal"> 27d820d9z (Meya)</span></p>
                        </div>
                        <video src={animation} className="w-[12vw] h-auto" autoPlay loop muted playsInline></video>
                        <div className="flex flex-col items-end w-[7.5vw] gap-[1.3vw]">
                            <p className="text-right font-Radikal text-[1vw]">This project was given to us by</p>
                            <img src={logoIO} className="w-[3vw] h-auto object-contain"/>
                            <p className="text-right font-Radikal text-[1vw]">iO Digital</p>
                        </div>
                    </div>
                    <div className="flex">
                        {/*accessibility*/}
                        <div className="flex flex-col h-[40vw] justify-between py-[1.5vw] items-center">
                            <h2 className="bg-ohYellow text-ohPink font-RadikalB rounded-r-full text-[3vw] ml-[-1vw] mr-[1vw] z-40 mt-[1vw] text-center py-[0.6vw] px-[5.5vw]" style={{boxShadow: "0.2vw 0.2vw 0.5vw rgba(0, 0, 0, 0.2)",}}>Accessibility</h2>
                            <div className="w-[22vw]">
                                <h3 className="font-RadikalB text-[1.8vw]">Font zoom function</h3>
                                <p className="font-Radikal text-[0.78vw]">With this function users can make the text on their phones
                                    bigger. The max is 23px. Its located in the menu.</p>
                                <img src={zoomFunction} className="ml-[1.3vw] w-[13vw] h-auto object-contain"/>
                            </div>
                            <div className="w-[22vw]">
                                <h3 className="font-RadikalB text-[1.8vw]">Reader function</h3>
                                <p className="font-Radikal text-[0.78vw]">With this function instead of reading, the user can listen
                                    to the text sitting under the speaker symbol.</p>
                                <img src={soundIcon} className="w-[2.6vw] h-auto object-contain"/>
                            </div>
                            <div className="w-[22vw] h-[7vw]">
                                <div className="absolute w-[22vw]">
                                    <h3 className="font-RadikalB text-[1.8vw] leading-tight">Language change
                                        function</h3>
                                    <p className="font-Radikal text-[0.78vw]">Users can change the language of their app
                                        in 13 different
                                        languages.</p>
                                </div>
                                <img src={swirlLine} className="absolute h-[5.6vw] w-auto ml-[16.5vw]"/>
                            </div>
                        </div>

                        {/*talent discovery*/}
                        <div className="flex flex-col bg-ohGreen rounded-tl-[20vw] items-end justify-between w-[49.6vw] pb-[1.5vw] pt-[3vw] px-[2.5vw]">
                        <h2 className="font-RadikalB text-[3vw]">Talent Discovery</h2>
                            <div className="flex text-[1vw] gap-[4.5vw]">
                                <h4 className="text-white bg-ohPink rounded-full py-[0.35vw] w-[7vw] text-center">Creative</h4>
                                <h4 className="text-white bg-ohPink rounded-full py-[0.35vw] w-[7vw] text-center">Leader</h4>
                                <h4 className="text-white bg-ohPink rounded-full py-[0.35vw] w-[7vw] text-center">Organizer</h4>
                                <h4 className="text-white bg-ohPink rounded-full py-[0.35vw] w-[7vw] text-center">Supporter</h4>
                            </div>
                            <div className="flex justify-evenly w-[43.5vw] mb-[-2vw]">
                                <img src={normalLine} className="h-[1.35vw]"/>
                                <img src={normalLine} className="h-[1.35vw]"/>
                            </div>
                            <div className="flex gap-[5.5vw]">
                                <img src={wireframeQuiz1} className="w-[11vw] h-auto object-contain"/>
                                <img src={wireframeQuiz2} className="w-[11vw] h-auto object-contain"/>
                                <img src={wireframeResult} className="w-[11vw] h-auto object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default OpenHiring;