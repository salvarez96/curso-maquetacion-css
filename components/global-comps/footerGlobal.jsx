import React from "react";
import styled from "styled-components";

// Estilos

const Footer = styled.footer`
  width: 100%;
  background-color: var(--dark-blue);

  & p {
    width: 100%;
    padding: 1.8rem 0;
    border-top: 30px solid var(--main-green);
    color: white;
    text-align: center;
    font-size: calc(16rem / 16);
  }
`;
/* ------------------------------------------- */

// Componente

export default function FooterGlobal() {
  return(
    <Footer>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Footer>
 );
}
