import "./Home.scss";
import { useEffect } from "react";
import Hero from "../../components/Home/Hero";
import Skills from "../../components/Home/Skills";
import ProjectsIntro from "../../components/Home/ProjectsIntro";
import Education from "../../components/Home/Education";
//import Testimonials from "../../components/Home/Testimonials";

function Home() {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            document.body.style.overflowY = "auto"; // Habilita el scroll vertical en móviles
            return;
        }

        const handleWheel = (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                window.scrollBy({
                    left: event.deltaY * 3,
                    behavior: "smooth",
                });
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            document.body.style.overflowY = "hidden"; // Evita scroll vertical en escritorio
        };
    }, []);

    return (
        <main className="home">
            <Hero />
            <Skills />
            <ProjectsIntro />
            <Education />
            {
                // <Testimonials />
            }
        </main>
    );
}

export default Home;
