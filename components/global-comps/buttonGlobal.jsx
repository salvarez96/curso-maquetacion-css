import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Estilos

const MainButton = styled.button`
  background-color: ${props => props.backgroundColor};
  padding: 14px calc(18rem / 16);
  border: ${props => props.border};
  font-size: calc(${props => props.fontSize}rem /16);
  font-weight: bold;
  width: max-content;
  font-family: inherit;

  @media (max-width: 475px) {
    font-size: calc(16rem / 16);
  }

  &:hover {
    cursor: pointer;
  }
`;
/* ------------------------------------------- */

// Componente

export default function GlobalButton({ link, buttonText, bgColor, border, fontSize, className }) {
  return(
    <div className={className}>
      <Link href={link}>
        <MainButton 
          type="button"
          backgroundColor={bgColor}
          border={border}
          fontSize={fontSize}
        >
          {buttonText}
        </MainButton>
      </Link>
    </div>
 );
}
