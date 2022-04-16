import React from "react";
import { useEffect, useState } from "react";

const Navbar = ({ navLinks }) => {
    const [activeLink, setActiveLink] = useState(navLinks[0].dataset.name);
    // const [hide, setHide] = useState(false);
    // const [scrollPos, setScrollPos] = useState(0);
    // const [byMouse, setByMouse] = useState(false); // wheter the navbar is being shown because the user put the mouse at the top of the screen

    useEffect(() => {
        const elementInViewport = (el) =>
            el.offsetTop < window.pageYOffset + window.innerHeight &&
            el.offsetTop + el.offsetHeight > window.pageYOffset;

        const onScroll = () => {
            // highlight the link that matches with the user scroll position
            navLinks.forEach(
                element => elementInViewport(element) && setActiveLink(element.dataset.name)
            );

            // // hide the navbar when scrolling down
            // setHide(scrollPos < window.scrollY && window.scrollY > 100);
            // setScrollPos(window.scrollY);
        };

        // // show navbar when user put the mouse all the way at the top
        // const onMouseMoving = (event) => {
        //     if (window.scrollY > 100) {
        //         if (event.clientY < 50) {
        //             setHide(false);
        //             setByMouse(true);
        //         } else if (byMouse && event.clientY > 50) {
        //             setHide(true);
        //             setByMouse(false);
        //         }
        //     }
        // };

        window.addEventListener("scroll", onScroll);
        // window.addEventListener("mousemove", onMouseMoving);

        return () => {
            window.removeEventListener("scroll", onScroll);
            // window.removeEventListener("mousemove", onMouseMoving);
        };
    });

    return (
        <nav
            className="nav"
        >
            {navLinks.map((element, index) => (
                <div
                    key={Math.floor(Math.random() * 1000000)}
                    className="navlink"
                    onClick={() =>
                        // if user click home, then go to the top of the page else go to the element
                        index === 0 ? window.scrollTo(0, 0) : element.scrollIntoView()
                    }
                    data-active={activeLink === element.dataset.name && "true"}
                >
                    <h3>{element.dataset.name}</h3>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
