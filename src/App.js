import Navbar from "./components/Navbar";
import Section from "./Section";
import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {
    const [documentLoaded, setDocumentLoaded] = useState(false);
    useEffect(() => {
        setDocumentLoaded(true);
    }, []);

    const navSections = useRef([]);

    return (
        <>
            {documentLoaded && <Navbar navLinks={navSections.current} />}

            <Section innerRef={element => (navSections.current[0] = element)} name={"Home"} />
            <Section innerRef={element => (navSections.current[1] = element)} name={"React"} />
            <Section innerRef={element => (navSections.current[2] = element)} name={"About"} />
        </>
    );
}

export default App;
