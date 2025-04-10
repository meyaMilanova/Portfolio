import postersOld from "../../assets/images/graphicDesign/posters.png";
import posterFirst from "../../assets/images/graphicDesign/first-poster.png"
import ProjectTitles from "../ProjectTitles.jsx";

function PostersTries() {

    return (
        <>
            <ProjectTitles
            title="Poster Tries . January 2025"
            subtitle="Personal Project "/>

            <section className="flex mx-[8vw] items-end mt-[46vw]">
                <div className="absolute w-[16.6vw] mb-[8vw]">
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed text-justify">The themes of 'craving,' 'passion,' and 'focus' reflect the connection between humans and technology, with a mix of vibrant colors and metallic tones to bring the designs to life.</p>
                </div>
                <img className="w-[50vw] absolute ml-[15vw]" src={postersOld}/>
                <div className="absolute w-[24vw] ml-[55vw] mb-[40vw]">
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed text-justify">These posters are some of my first designs, created using Photoshop. Inspired by retro technology and the digital age, I combined bold typography with layered textures and nostalgic elements like Nokia phones.</p>
                </div>
                <div className="absolute w-[20.7vw] ml-[63vw] flex flex-col items-end mb-[-4vw]">
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed text-justify">This
                        is my first poster, featuring a hedgehog and a contrast between nature and urban design.</p>
                    <img className="w-[18vw]" src={posterFirst}/>
                </div>
                {/*<div>*/}

                {/*</div>*/}
            </section>
        </>
    )
}

export default PostersTries;