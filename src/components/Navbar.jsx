import React from "react";
import NavbarItems from "./NavbarItems";
import { useState, useEffect } from "react";

const Navbar = (sections) => {
    const { home, react, about } = sections.sections;
    const [activeLink, setActiveLink] = useState("Home");

    useEffect(() => {
        function elementInViewport(el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;

            return (
                top < window.pageYOffset + window.innerHeight &&
                top + height > window.pageYOffset
            );
        }

        const scrollListener = window.addEventListener("scroll", () => {
            [home, react, about].forEach((element, index) => {
                console.log()
            });
        });

        return () => {
            window.removeEventListener(scrollListener);
        };
    }, []);

    const fun = (id) => {
        switch (id) {
            case "Home":
                home.scrollIntoView();
                break;
            case "React":
                react.scrollIntoView();
                break;
            case "About":
                about.scrollIntoView();
                break;
            default:
                break;
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <NavbarItems
                    id="Home"
                    onClick={(e) => fun(e.target.id)}
                    activeLink={activeLink[0]}
                />
                <NavbarItems
                    id="React"
                    onClick={(e) => fun(e.target.id)}
                    activeLink={activeLink[0]}
                />
                <NavbarItems
                    id="About"
                    onClick={(e) => fun(e.target.id)}
                    activeLink={activeLink[2]}
                />
            </div>
        </nav>
    );
};

export default Navbar;

// console.log("nav bar:",e.item)

//navbar items
// TODO: everytime a section is created it should auto add it to the Navbar
//this guy loops through a list passed down from App.js and calls NavbarItems with the info from the list
