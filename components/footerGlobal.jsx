import React from "react";
import styled from "styled-components";

// Estilos

const Footer = styled.footer`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;
  min-height: 120px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);

  & .decor-div {
    grid-row: 1;
    background-color: var(--main-green);
    width: 100%;
    height: 100%;
  }

  & .text-div {
    grid-row: 2;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(16rem / 16);

    & p {
      padding: 1em;
    }
  }
`;
/* ------------------------------------------- */

// Componente

export default function FooterGlobal() {
  return(
    <Footer>
      <div className="decor-div"></div>
      <div className="text-div">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Footer>    
 );
}
