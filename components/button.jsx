import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MainButton = styled.button`
  background-color: ${props => props.backgroundColor};
  padding: 14px calc(18rem / 16);
  border: ${props => props.border};
  font-size: calc(20rem /16);
  font-weight: bold;
  width: max-content;
`;


export default function GlobalButton({ link, buttonText, bgColor, border }) {
  return(
    <MainButton 
      type="button"
      backgroundColor={bgColor}
      border={border}
    >
      <Link href={link}>{buttonText}</Link>
    </MainButton>
 );
}
