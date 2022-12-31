import React from "react";
import styled from "styled-components";
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

// Estilos:

const HeaderIconsSection = styled.section`
  width: 100%;
  height: calc(50rem / 16);
  display: grid;
  background-color: #47cfac;

  & div {
    width: 300px;
    height: auto;
    display: flex;
    /* justify-items: flex-end; */
    align-items: center;
    justify-content: space-between;
    justify-self: end;
    margin-right: 50px;
  }

  & .icons {
    width: 24px;
    height: 24px;
    color: white;
  }
`;
/* ------------------------------------------- */

// Componente

export default function HeaderIcons() {
  return(
    <HeaderIconsSection>
      <div>
        <a href="/"><BsFacebook className="icons" /></a>
        <a href="/"><AiFillTwitterCircle className="icons" /></a>
        <a href="/"><AiFillInstagram className="icons" /></a>
        <a href="/"><AiFillLinkedin className="icons" /></a>
        <a href="/"><AiFillYoutube className="icons" /></a>
      </div>
    </HeaderIconsSection>
 );
}
