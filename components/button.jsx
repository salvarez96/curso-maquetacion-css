import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Estilos

const MainButton = styled.button`
  background-color: ${props => props.backgroundColor};
  padding: 14px calc(18rem / 16);
  border: ${props => props.border};
  font-size: calc(20rem /16);
  font-weight: bold;
  width: max-content;
`;
/* ------------------------------------------- */

// Componente

export default function GlobalButton({ link, buttonText, bgColor, border, className }) {
  return(
    <div className={className}>
      <Link href={link}>
        <MainButton 
          type="button"
          backgroundColor={bgColor}
          border={border}
        >
          {buttonText}
        </MainButton>
      </Link>
    </div>
 );
}
