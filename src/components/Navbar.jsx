import React from "react";
import NavbarItems from "./NavbarItems";
import { useEffect } from "react";
import useState from "react-usestateref";

const Navbar = sections => {
    const { home, react, about } = sections.sections;
    const [, setActiveLink, activeLinkRef] = useState("Home");

    useEffect(() => {
        const elementInViewport = el => {
            return (
                el.offsetTop < window.pageYOffset + window.innerHeight &&
                el.offsetTop + el.offsetHeight > window.pageYOffset
            );
        };

        const scrollListener = window.addEventListener("scroll", () => {
            [home, react, about].forEach(element => {
                elementInViewport(element) && setActiveLink(element.dataset.name);
            });
        });

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    const fun = id => {
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
                    onClick={e => fun(e.target.id)}
                    active={activeLinkRef.current === "Home" ? "true" : ""}
                />
                <NavbarItems
                    id="React"
                    onClick={e => fun(e.target.id)}
                    active={activeLinkRef.current === "React" ? "true" : ""}
                />
                <NavbarItems
                    id="About"
                    onClick={e => fun(e.target.id)}
                    active={activeLinkRef.current === "About" ? "true" : ""}
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
