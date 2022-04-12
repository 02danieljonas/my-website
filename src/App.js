import Navbar from "./components/Navbar";
import Section from "./Section";
import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        setShowNav(true);
    }, []);

    const homeSection = useRef(null);
    const reactSection = useRef(null);
    const aboutSection = useRef(null);

    return (
        <>
            {showNav && (
                <Navbar
                    sections={{
                        home: homeSection.current,
                        react: reactSection.current,
                        about: aboutSection.current,
                    }}
                />
            )}

            <Section innerRef={homeSection} />
            <Section innerRef={reactSection} />
            <Section innerRef={aboutSection} />
        </>
    );
}

export default App;
