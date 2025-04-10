import songPages from "../../assets/images/graphicDesign/9982292.png";
import ProjectTitles from "../ProjectTitles.jsx";

function MusicMagazine() {

    return (
        <>
            <ProjectTitles
                title="Music Magazine . July 2024"
                subtitle="Personal Project "/>

            <section className="flex px-[10vw] gap-[5vw] mt-[-15vw] items-center">
                <div className="flex flex-col gap-[9.5vw]">
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">To continue my graphic design journey, I explored InDesign by creating a music magazine. I asked friends about their current favorite songs and designed spreads that reflected the feelings of the music. Each page includes lyrics, a photo or two of the artist, and other images that match the vibe and melody.</p>
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">The first song I represented is 'Dark' by WesGhost. Its mood is dark, feminine, and sexual, with a color palette of black and red.</p>
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">The second song is 'Antenna' by Hyukoh and Sunset Rollercoaster. It feels light and dreamy yet carries a subtle sadness and an abstract vibe.</p>
                    <p className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">I’m still working on this project in my free time. My goal is to create a full magazine, complete with a cover, and print it to share with the friends who contributed to it.</p>
                </div>
                <img className="w-[35vw]" src={songPages}/>
            </section>
        </>
    )
}
export default MusicMagazine;