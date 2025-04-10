import ProjectTitles from "../ProjectTitles.jsx";
import blackBg from "../../assets/images/obsessiveStudio/black-velvet-bg.png";
import logoB from "../../assets/images/obsessiveStudio/obsessive-log.png";
import pinkBg from "../../assets/images/obsessiveStudio/background.png";
import butterfly from "../../assets/images/obsessiveStudio/butterfly.png";
import wireframeReserve1 from "../../assets/images/obsessiveStudio/Reservering page-ont-2.png";
import wireframeReserve2 from "../../assets/images/obsessiveStudio/Reservering page 2-ont-2.png";
import wireframeReserve3 from "../../assets/images/obsessiveStudio/Reservering page 3-ont-2.png";
import wireframeReserve4 from "../../assets/images/obsessiveStudio/Reservering page 4-ont-2.png";
import wireframeReserve5 from "../../assets/images/obsessiveStudio/Reservering page 5-ont-2.png";
import wireframeContact from "../../assets/images/obsessiveStudio/Contact page-ont-2.png";
import mockUp from "../../assets/images/obsessiveStudio/Two Floating MacBooks Mockup.png";
import styleGuide from "../../assets/images/obsessiveStudio/Style guide-ont-2.png";
import logoM from "../../assets/images/obsessiveStudio/mini-logo.png";





function ObsessiveStudio() {

    return (
        <>
            <ProjectTitles
            title="Obsessive Studio . December 2023"
            subtitle="Personal Academic Project"
            projectIdea="Project Idea"
            myWork="My Work"
            checkOut="CHECK OUT"
            firstDescription="Obsessive Studio is a beauty salon that specializes in lashes. They also offer brow treatments, facials, teeth whitening, and training. The salon didn’t have a website yet, so I created a design that reflects the style and atmosphere of the studio."
            firstText="Before starting the design, I interviewed the owner to discuss her wishes for the website, including the color scheme and the kind of information she wanted to show. One key request was a reservation system where clients can book appointments."
            secondText="I designed a home page, contact page, and a multi-step reservation system. The salon’s interior is styled with rose gold, white, and black, so I made sure to bring those colors into the design."
            thirdText="On the side, I also created a style guide to document all the visual details. Everything was designed in Figma."
            link="https://www.figma.com/design/5JTZSC3djjKpnHHsZsHmVM/Ontwerpen?node-id=0-1&t=RJxvehDCWqV55w4r-1"/>

            <section style={{backgroundImage: `url(${pinkBg})`}} className="bg-no-repeat bg-fixed bg-cover bg-center">

                {/*top part*/}
                <div className="flex justify-between">

                    {/*black bg logo*/}
                    <div>
                        <img className="absolute w-[28vw]" src={blackBg}/>
                        <img className=" absolute w-[18vw] ml-[2.3vw] mt-[1.3vw]" src={logoB}/>
                    </div>

                    {/*butterfly*/}
                    <div className="">
                        <div className="border-l-[0.2vw] border-b-[0.2vw] h-[11vw] ml-[2vw] w-[18vw] border-obsPink"></div>
                        <div className="border-l-[0.2vw] border-b-[0.2vw] mt-[-11vw] ml-[4vw] h-[13vw] w-[16vw] border-black"></div>
                        <img className="w-[5.5vw] mt-[-9.5vw] ml-[9.5vw]" src={butterfly}/>
                    </div>
                </div>

                {/*wireframes*/}
                <div className="flex justify-center items-center mt-[-7vw] ml-[7vw] mb-[2vw]">
                    <img className="w-[14vw] z-30 mt-[16vw]" src={wireframeReserve1}/>
                    <img className="w-[14vw] z-40 ml-[-1.3vw] mt-[5.5vw]" src={wireframeReserve2}/>
                    <img className="w-[14vw] z-50 ml-[-0.8vw]" src={wireframeReserve3}/>
                    <img className="w-[14vw] z-40 ml-[-0.8vw] mt-[-4vw]" src={wireframeReserve4}/>
                    <img className="w-[14vw] z-30 ml-[-1.3vw] mt-[3.5vw]" src={wireframeReserve5}/>
                    <img className="w-[14vw] z-20 ml-[-2vw] mt-[16vw]" src={wireframeContact}/>
                </div>

                {/*bottom div*/}
                <div style={{backgroundImage: `url(${mockUp})`}} className="flex justify-between items-end bg-no-repeat bg-cover bg-center h-[35vw]">

                    {/*style guide*/}
                    <div>
                        <div className="absolute border-r-[0.2vw] border-t-[0.2vw] h-[33vw] w-[34.5vw] border-obsPink mt-[-33vw]"></div>
                        <div className="absolute border-r-[0.2vw] border-t-[0.2vw] h-[31vw] w-[37vw] border-black mt-[-31vw]"></div>
                        <img className="absolute bg-white w-[25vw] mt-[-28vw] ml-[4.5vw] p-[0.5vw]" src={styleGuide}/>
                    </div>

                    {/*mini logo*/}
                    <div>
                        <img className="w-[5vw] m-[1vw]" src={logoM}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObsessiveStudio;