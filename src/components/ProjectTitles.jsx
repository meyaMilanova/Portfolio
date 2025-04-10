import React from 'react';
import miniLogo from "./../assets/images/layout/chrome-logo.png";

function ProjectTitles({
                           title,
                           subtitle,
                           firstDescription,
                           secondDescription,
                           thirdDescription,
                           firstText,
                           secondText,
                           thirdText,
                           link,
                           projectIdea,
                           myWork,
                           checkOut
                       }) {
    return (
        <section className="w-full mt-[13vw] mb-[8vw]">
            <div className="w-full inset-0 border-b-[0.3vw] border-myGreen flex pl-[5.5vw] items-end">
                <img src={miniLogo} className="-rotate-45 h-[3.5vw]" alt="Mini Logo"/>
                <div className="pb-[0.25vw]">
                    <h3 className="font-Dhyna text-white leading-tight text-[2.15vw]">{title}</h3>
                    <h4 className="font-Dhyna text-white leading-tight text-[1.45vw]">{subtitle}</h4>
                </div>
            </div>

            <div className="w-full px-[7.1vw] pt-[4.5vw]">
                <div className="font-HelveticaNeueL text-white text-[1vw] leading-relaxed">
                    <div className="pl-[28vw] pr-[5vw]">
                        <p className="pt-[1vw] font-Dhyna text-[2vw]">{projectIdea}</p>
                        <p className="pl-[3vw]">{firstDescription}</p>
                        <p className="pl-[3vw] pt-[1vw]">{secondDescription}</p>
                        <p className="pl-[3vw] pt-[1vw]">{thirdDescription}</p>
                    </div>

                    <div className="flex items-end">
                        <div className="pl-[4vw] w-[47vw]">
                            <p className="pt-[1vw] text-[2vw]">{myWork}</p>
                            <p className="pl-[3vw]">{firstText}</p>
                            <p className="pl-[3vw] pt-[1vw]">{secondText}</p>
                            <p className="pl-[3vw] pt-[1vw]">{thirdText}</p>
                        </div>
                        <a href={link} target="_blank" rel="noopener noreferrer"
                           className="w-auto pl-[7vw] text-[3.5vw] text-white hover:text-myGreen">
                            {checkOut}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectTitles;
