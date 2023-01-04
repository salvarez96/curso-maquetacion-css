import React from "react";
import styled from "styled-components";

// Estilos

const Article = styled.article`
  padding: 0 15px;

  & h4 {
    margin-bottom: 20px;
  }
`;
/* ------------------------------------------- */

// Componente

export default function ProjectDescription({ title, content }) {
  return(
    <Article>
      <h4>{ title }</h4>
      <p>{ content }</p>
    </Article>
 );
}
