import React from "react";
import {NavLink} from "react-router-dom";
import logoGreen from '../assets/images/layout/chrome-logo-green 1.png';
import logoWhite from '../assets/images/layout/chrome-logo.png';


function Nav() {
    return (
        <nav className="bg-blackBackground z-50 top-0 left-0">
            <ul className="flex space-x-[3vw] text-[1.2vw] pl-[5vw] pt-[4vw]">
                <li>
                    <NavLink to="/">
                        {({ isActive }) =>
                            isActive ? (
                                <img
                                    src={logoGreen}
                                    alt="Home Active"
                                    className="w-auto h-[2vw] hover:opacity-80"
                                />
                            ) : (
                                <img
                                    src={logoWhite}
                                    alt="Home Inactive"
                                    className="w-auto h-[2vw] hover:opacity-80"
                                />
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `font-Dhyana tracking-wider ${
                                isActive
                                    ? "text-myGreen hover:text-myGreenHover"
                                    : "text-white hover:text-grey"
                            }`
                        }
                    >
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({isActive}) =>
                            `font-Dhyana tracking-wider ${
                                isActive
                                    ? "text-myGreen hover:text-myGreenHover"
                                    : "text-white hover:text-grey"
                            }`
                        }
                    >
                        PROJECTS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                            `font-Dhyana tracking-wider ${
                                isActive
                                    ? "text-myGreen hover:text-myGreenHover"
                                    : "text-white hover:text-grey"
                            }`
                        }
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav