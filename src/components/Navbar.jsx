import React from "react";
import NavbarItems from "./NavbarItems";
import { useEffect } from "react";
import useState from "react-usestateref";

const Navbar = ({ navLinks }) => {
    const [, setActiveLink, activeLinkRef] = useState(navLinks[0].dataset.name);

    useEffect(() => {
        const elementInViewport = el => {
            return (
                el.offsetTop < window.pageYOffset + window.innerHeight &&
                el.offsetTop + el.offsetHeight > window.pageYOffset
            );
        };

        const scrollListener = window.addEventListener("scroll", () => {
            navLinks.forEach(element => {
                elementInViewport(element) && setActiveLink(element.dataset.name);
            });
        });

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                {navLinks.map((element, index) => (
                    <NavbarItems
                        key={index}
                        onClick={() => element.scrollIntoView()}
                        active={activeLinkRef.current === element.dataset.name ? "true" : ""}
                    >
                        {element.dataset.name}
                    </NavbarItems>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

// console.log("nav bar:",e.item)

//navbar items
// TODO: everytime a section is created it should auto add it to the Navbar
//this guy loops through a list passed down from App.js and calls NavbarItems with the info from the list
