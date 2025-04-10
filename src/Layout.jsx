import React, {useEffect, useState} from "react";
import Nav from "./components/Nav.jsx";
import {Outlet} from "react-router-dom";
import './style.css'


function Layout() {



    const [isVisible, setIsVisible] = useState(false);

    const checkScrollPosition = () => {
        // console.log('scroll position:', window.scrollY);
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <main className="bg-blackBackground m-0">
            <Outlet/>
            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    className="scroll-to-top-button"
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            )}
        </main>
    );
}

export default Layout