import React from "react";
import styled from "styled-components";
import ProjectDescription from "./projectDescription";
import projects from './projects.json';

// Estilos

const Section = styled.section`
  width: 80vw;
  max-width: 1200px;
  margin: 50px auto;

  & h3 {
    text-align: center;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--gray-bg);
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 10px;
  margin-top: 40px;

  & p {
    margin-bottom: 25px;
  }
`;
/* ------------------------------------------- */

// Componente

export default function ProjectsSection() {
  return(
    <Section>
      <h3>Proyectos</h3>
      <Div>
        <ProjectDescription
          title={projects.project1.title}
          content={projects.project1.content}
        />
        <ProjectDescription
          title={projects.project2.title}
          content={projects.project2.content}
        />
        <ProjectDescription
          title={projects.project3.title}
          content={projects.project3.content}
        />
      </Div>
    </Section>  
 );
}
