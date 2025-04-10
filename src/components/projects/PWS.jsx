import ProjectTitles from "../ProjectTitles.jsx";
import shop1 from "../../assets/images/3d/Screenshot 2025-03-07 184316.jpg";
import shop2 from "../../assets/images/3d/9982294.jpg";
import shop3 from "../../assets/images/3d/9982293.jpg";
import shop4 from "../../assets/images/3d/Capture8.jpg";
import shop5 from "../../assets/images/3d/Capture2.jpg";
import factory1 from "../../assets/images/3d/7.jpg";
import factory2 from "../../assets/images/3d/6.jpg";
import factory3 from "../../assets/images/3d/Capture6.jpg";
import ap1 from "../../assets/images/3d/Capture.jpg";
import ap2 from "../../assets/images/3d/3.jpg";
import ap3 from "../../assets/images/3d/4.jpg";






function PWS() {
    return (
        <>
            <ProjectTitles
                title="Futuristic & sustainable buildings . December 2022 - February 2023"
                subtitle="Collaborative High School Project" />

            <section className="px-[8vw] flex flex-col gap-[8vw] mt-[-10vw]">
                <div className="flex gap-[5vw]">
                    <img src={shop1} className="w-[50vw] inner-shadow"/>
                    <div className="text-right flex flex-col justify-between">
                        <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">For our school research
                            project, my team and I focused on designing futuristic, sustainable buildings by exploring
                            innovative energy solutions. To showcase our ideas, we created wooden prototypes of a
                            shopping center, an apartment complex, and a recycling factory, demonstrating how
                            sustainability could be integrated into each structure. For each building I developed
                            detailed 3D models in AutoCAD.</p>
                        <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">I concentrated on the
                            shopping center. The design featured solar panels on the roof to generate clean energy,
                            glass walls to maximize natural lighting, and cascading vines along the building’s edges. At
                            its center, I included a large tree to enhance greenery and air quality.</p>
                    </div>
                </div>

                <div className="flex gap-[3vw]">
                    <div className="flex flex-col justify-around">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Shopping Center</h2>
                        <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">Outside, I designed a
                            park and a unique Y-shaped cover above al the seats that collected rainwater for energy use
                            and harnessed the energy of falling raindrops.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[3vw]">
                        <img src={shop2} className="w-[70vw]"/>
                        <img src={shop3} className="w-[70vw]"/>
                    </div>
                    <div className="flex flex-col gap-[3vw]">
                        <img src={shop4} className="w-[89.5vw]"/>
                        <img src={shop5} className="w-[89.5vw]"/>
                    </div>
                </div>


                <div className="relative w-full h-[100vh]">
                    <div className="absolute left-0 top-0 flex flex-col items-start gap-[2vw] ml-[5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Recycling Factory</h2>
                            <img src={factory1} className="w-[20vw]"/>
                            <img src={factory2} className="w-[20vw]"/>
                    </div>

                    <div className="absolute top-0 left-[23vw] flex flex-col items-center justify-center pt-[9vw] mx-[7vw] w-[25vw]">
                        <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed mb-[12.5vw] text-justify">
                            The apartment complex followed similar sustainable principles, with solar panels,
                            plant-filled balconies, and designs to optimize natural light. Meanwhile, the recycling
                            factory utilized wind turbines for energy and incorporated chimney filters to minimize
                            pollution, further emphasizing eco-friendly innovation.
                        </p>
                        <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed text-justify">
                            This project allowed me to combine creative design with practical sustainability, creating a
                            vision for more environmentally conscious buildings.
                        </p>
                    </div>

                    <div className="absolute right-0 top-0 flex flex-col items-end gap-[2vw] mr-[5vw]">
                        <h2 className="text-myGreen text-[2vw] font-DhynaBold">Apartment Complex</h2>
                            <img src={ap1} className="w-[19vw]"/>
                            <img src={ap2} className="w-[19vw]"/>
                    </div>
                </div>

                <div className="flex gap-[3vw] justify-center items-center mb-[10vw] mt-[-10vw]">
                    <img src={factory3} className="w-[39.2vw]"/>
                    <img src={ap3} className="w-[31.3vw]"/>
                </div>
            </section>
        </>
    );
}

export default PWS;
