import Image from "next/image";
import React from "react";
import styled from "styled-components";

// Estilos

const Contact = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: flex-end;

  & img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  & h4 {
    display: inline-block;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }

  @media (max-width: 850px) {
    width: 40%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
    font-size: calc(14rem / 16);

    & img {
      width: 60px;
      height: auto;
      margin-bottom: 12px;
    }
  }
`
/* ------------------------------------------- */

// Componente

export default function ContactMe({ image, title, content, alt }) {
  return(
    <Contact className="info-container">
      <Image 
        src={image}
        alt={alt}
      />
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </Contact>
 );
}
