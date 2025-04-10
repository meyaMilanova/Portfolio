import '../../style.css';
import ProjectTitles from "../ProjectTitles.jsx";
import bg from "../../assets/images/gaia/background.png"
import poster from "../../assets/images/gaia/mock-up-poster.png"
import wireframeHome from "../../assets/images/gaia/wireframe-home-1.png"
import wireframeDonation from "../../assets/images/gaia/wireframe-donation.png"
import hoodieBack from  "../../assets/images/gaia/unisex-hoodie-beige-light-purple-bamboo-back.png"
import onesie from "../../assets/images/gaia/onesie-black-mammoth.png"
import hat from "../../assets/images/gaia/hat-black-white-gaia.png"
import tshirtWoman from "../../assets/images/gaia/woman-tshirt-white-pink-gaia.png"
import phoneCase from "../../assets/images/gaia/phone-case-flowers.png"
import toteBag from "../../assets/images/gaia/tote-black-pink-gaia.png"
import tshirtMan from "../../assets/images/gaia/man-tshirt-black-gaia.png"
import whiteBg from "../../assets/images/gaia/white-logo-bg.png"
import logo1 from "../../assets/images/gaia/logo-text-str-white.png"
import logo2 from "../../assets/images/gaia/logo-texr-str.png"
import logo3 from "../../assets/images/gaia/logo-text-white.png"
import logo4 from "../../assets/images/gaia/logo.png"
import logo5 from "../../assets/images/gaia/logo4.png"
import logo6 from "../../assets/images/gaia/logo3.png"
import logo7 from "../../assets/images/gaia/logo2.png"
import logo8 from "../../assets/images/gaia/logo-text.png"
import logo9 from "../../assets/images/gaia/logo13.png"
import logo10 from "../../assets/images/gaia/logo15.png"
import logo11 from "../../assets/images/gaia/logo7.png"
import logo12 from "../../assets/images/gaia/logo14.png"
import logo13 from "../../assets/images/gaia/logo12.png"
import logo14 from "../../assets/images/gaia/logo11.png"
import logo15 from "../../assets/images/gaia/logo8.png"
import logo16 from "../../assets/images/gaia/logo5.png"
import logo17 from "../../assets/images/gaia/logo6.png"
import logo18 from "../../assets/images/gaia/logo9.png"
import logo19 from "../../assets/images/gaia/logo10.png"



function GaiaPark() {



    const repeatingText = [];
    for (let i = 0; i < 30; i++) {
        repeatingText.push(
            <p className="text-[0.8vw] flex pl-[0.2vw] items-baseline font-Ade text-white bg-blackBackground py-[0.2vw] text-center">
                GAIA <span key={i} className="pl-[0.2vw] font-Strawford text-gaiaGreen"> PARK </span>
            </p>
        );
    }


    return (
        <>
        <ProjectTitles
                title="Gaia Park · September-October 2024"
                subtitle="Collaborative Academic Project"
                projectIdea="Project Idea"
                myWork="My Work"
                checkOut="CHECK OUT"
                firstDescription="Gaia Park is a visionary project that combines technology, nature conservation, and entertainment to address climate challenges. Before starting, I researched about nature, technology, and methods to make the Earth more eco-friendly. Later, with my team, we developed the idea of Gaia Park. By reintroducing extinct species to restore ecosystems and offering the Gaia Seed initiative, which lets visitors plant seeds to directly contribute to Earth's recovery, Gaia Park inspires a greener and more sustainable future."
                firstText="My primary role in Gaia Park was focused on design and development. I coded the CSS for the home, support, and donation pages, as well as the entire mobile interface for the Gaia Seed feature. Additionally, I developed the donation page using PHP and created a database in phpMyAdmin to track donations."
                secondText="For styling, particularly on the home and donation pages, I used JavaScript to implement animations and dynamically generate HTML elements, simplifying the design process. Beyond coding, I was responsible for creating the project poster in Photoshop and designing merchandise using Photoshop and Adobe Illustrator. I also created mockups to showcase the merchandise designs professionally."
                link="https://project.hosted.hr.nl/2024_2025/tle1_exp_t10/TLE-1-T10/"
            />

            <section className="h-[70vw] bg-cover bg-center"
                     style={{backgroundImage: `url(${bg})`}}>
                <div className="absolute">
                    <div className="flex">
                        <div className="py-[4vw] px-[5vw] w-[64vw] relative">
                            <h1 className="font-Ade text-black text-[16vw] leading-none">GAIA</h1>
                            <h2 className="font-StrawfordI text-gaiaGreen text-[11.5vw] leading-[5vw] text-right">PARK</h2>
                            <div
                                className="font-Strawford text-black text-[4vw] flex flex-col leading-[6vw] mt-[-3.3vw] pl-[2vw]">
                                <h3 className="leading-[vw]">WHERE</h3>
                                <h3>NATURE & HUMANITY</h3>
                                <h3 className="text-right pr-[9.5vw]">RECONNECT</h3>
                            </div>
                        </div>
                        <div className="flex justify-end items-end mt-[3vw] z-50">
                            <img src={wireframeHome}
                                 className="w-[16vw] h-auto mb-[1vw]"
                                 style={{boxShadow: "-15px 15px 25px rgba(0, 0, 0, 0.4)",}}
                            />
                            <img src={wireframeDonation}
                                 className="w-[16vw] h-auto ml-[-1vw]"
                                 style={{boxShadow: "-15px 15px 25px rgba(0, 0, 0, 0.4)",}}
                            />
                        </div>
                    </div>

                    <img src={poster}
                         className="relative h-auto mt-[-32vw]"
                         style={{boxShadow: "0 -0.3vw 1vw rgba(0, 0, 0, 0.3), 0 0.3vw 1vw rgba(0, 0, 0, 0.3)",}}
                    />
                </div>


            </section>

            <section className="w-[99.5.5vw] overflow-hidden">
                <div className="flex scroll-container bg-white items-baseline py-[2vw] mt-[5vw]">
                    <img src={hoodieBack} className="ml-[-2vw] w-[13vw] h-auto mr-[3vw] object-contain"/>
                    <img src={onesie} className="w-[13vw] h-auto mr-[3vw] object-contain"/>
                    <img src={tshirtWoman} className="w-[13vw] h-auto mr-[3vw] object-contain"/>
                    <img src={hat} className="w-[13vw] h-auto mr-[3vw] object-contain"/>
                    <img src={toteBag} className="w-[9vw] h-auto mr-[3vw] object-contain"/>
                    <img src={phoneCase} className="w-[11vw] h-auto mr-[3vw] object-contain"/>
                    <img src={tshirtMan} className="w-[13vw] h-auto mr-[3vw] object-contain"/>
                </div>

                <div className="flex">
                    <div className="flex">
                        {repeatingText}
                    </div>

                </div>



                <div className="ml-[6vw]" style={{
                    backgroundImage: `url(${whiteBg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "82vw",
                }}>

                    <h1 className="font-Strawford pt-[2vw] text-black leading-tight ml-[24vw] text-center text-[8vw] border-b-[0.5vw] border-gaiaGreen w-[40vw]">DESIGNS</h1>
                    <div className="flex flex-col gap-[3.5vw] mt-[3vw]">
                        <div className="w-[76vw] ml-[6vw] flex justify-between items-center">
                            <img src={logo1} className="h-[4vw] w-auto"/>
                            <img src={logo2} className="h-[4vw] w-auto"/>
                        </div>
                        <div className="w-[88vw] flex justify-between items-center">
                            <img src={logo3} className="h-[11vw] w-auto"/>
                            <img src={logo4} className="h-[11vw] w-auto"/>
                            <img src={logo5} className="h-[11vw] w-auto"/>
                            <img src={logo6} className="h-[11vw] w-auto"/>
                            <img src={logo7} className="h-[11vw] w-auto"/>
                            <img src={logo8} className="h-[11vw] w-auto"/>
                        </div>
                        <div className="w-[76vw] ml-[6vw] flex justify-between items-center">
                            <img src={logo9} className="h-[11vw] w-auto"/>
                            <img src={logo10} className="h-[11vw] w-auto"/>
                            <img src={logo11} className="h-[8vw] w-auto"/>
                            <img src={logo12} className="h-[11vw] w-auto"/>
                            <img src={logo13} className="h-[11vw] w-auto"/>
                        </div>
                        <div className="w-[88vw] flex justify-between items-center">
                            <img src={logo14} className="h-[8vw] w-auto"/>
                            <img src={logo15} className="h-[8vw] w-auto"/>
                            <img src={logo16} className="h-[8vw] w-auto"/>
                            <img src={logo17} className="h-[8vw] w-auto"/>
                            <img src={logo18} className="h-[8vw] w-auto"/>
                            <img src={logo19} className="h-[8vw] w-auto"/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default GaiaPark;