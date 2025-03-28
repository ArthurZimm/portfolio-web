import { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Desenvolvedor 3",
    company: "Exodus Tecnologia",
    period: "jan de 2025 - atualmente",
    description: `Atuei no desenvolvimento de aplicações utilizando .Net e windows forms, 
                  realizei correções de bugs, melhorias e implementações no ERP da empresa, 
                  trabalhei desenvolvendo aplicações WEB com Blazor Server, Bootstrap, DevExpress, MudBlazor`
  },
  {
    title: "Desenvolvedor 2",
    company: "Exodus Tecnologia",
    period: "jan de 2024 - jan de 2025",
    description: `Atuei no desenvolvimento de aplicações utilizando .Net e windows forms, 
                  realizei correções de bugs, melhorias e implementações no ERP da empresa, 
                  trabalhei desenvolvendo aplicações WEB com Blazor Server, Bootstrap, DevExpress, MudBlazor`
  },
  {
    title: "Estagiário de Desenvolvimento",
    company: "Grupo Coutinho",
    period: "mai de 2023 - jan de 2024",
    description: "Atuei no desenvolvimento de api's utilizando .net e flask, além disso, colaborei no desenvolvimento de querys utilizando Oracle."
  }
];

const Experience = () => {
  return (
    <section className="section-experience">
      <div className="about-title text-center">
        <h1 id="about-title">Experiência Profissional</h1>
        <hr id="hr-about" />
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">📌</div>
            <div className="timeline-content">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-company">{exp.company}</span>
              <span className="experience-period">{exp.period}</span>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
