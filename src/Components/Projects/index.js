import { useState } from "react";
import "./Projects.css";

const projects = [
    { id: 1, name: "Projeto Alpha", description: "Uma plataforma inovadora para gestão de tarefas." },
    { id: 2, name: "Projeto Beta", description: "Uma ferramenta poderosa para análise de dados." },
    { id: 3, name: "Projeto Gamma", description: "Um aplicativo de produtividade para equipes." },
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section className="section-projects">
            <div className="projects-title">
                <h1 id="projects-title">Meus Projetos</h1>
                <hr id='hr-projects' />
            </div>
            <div className="carousel-container">
                <button onClick={prevProject} className="nav-button">{"<"}</button>

                <div className="carousel">
                    {projects.map((project, index) => {
                        const position =
                            index === currentIndex
                                ? "active"
                                : index === (currentIndex - 1 + projects.length) % projects.length
                                    ? "prev"
                                    : "next";

                        return (
                            <div key={project.id} className={`project-card ${position}`}>
                                <h2>{project.name}</h2>
                                <hr id='hr-projects' />
                                <p>{project.description}</p>
                            </div>
                        );
                    })}
                </div>

                <button onClick={nextProject} className="nav-button">{">"}</button>
            </div>
        </section>
    );
};

export default Projects;
