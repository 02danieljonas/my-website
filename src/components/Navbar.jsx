import React from "react";
import { useEffect, useState } from "react";

const Navbar = ({ navLinks }) => {
    const [activeLink, setActiveLink] = useState(navLinks[0].dataset.name);

    useEffect(() => {
        const elementInViewport = el =>
            el.offsetTop < window.pageYOffset + window.innerHeight &&
            el.offsetTop + el.offsetHeight > window.pageYOffset;

        const onScroll = () => {
            // highlight the link that matches with the user scroll position
            navLinks.forEach(
                element => elementInViewport(element) && setActiveLink(element.dataset.name)
            );
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <nav className="nav">
            {navLinks.map((element, index) => (
                <div
                    key={index}
                    className="navlink"
                    onClick={() => window.scrollTo({ top: element.offsetTop - 90 })}
                    data-active={activeLink === element.dataset.name && "true"}
                >
                    <h3>{element.dataset.name}</h3>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
