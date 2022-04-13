import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";

const Navbar = ({ navLinks }) => {
    const [, setActiveLink, activeLinkRef] = useState(navLinks[0].dataset.name);

    useEffect(() => {
        const elementInViewport = el =>
            el.offsetTop < window.pageYOffset + window.innerHeight &&
            el.offsetTop + el.offsetHeight > window.pageYOffset;

        const scrollListener = window.addEventListener("scroll", () =>
            navLinks.forEach(
                element => elementInViewport(element) && setActiveLink(element.dataset.name)
            )
        );

        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return (
        <nav className="nav">
            {navLinks.map(element => (
                <div
                    key={Math.floor(Math.random() * 1000000)}
                    onClick={() => element.scrollIntoView()}
                    data-active={activeLinkRef.current === element.dataset.name && "true"}
                    className="navlink"
                >
                    <h3>{element.dataset.name}</h3>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
