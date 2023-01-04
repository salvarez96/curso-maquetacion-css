import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

// Estilos:

const HeaderIconsSection = styled.section`
  width: 100%;
  height: calc(50rem / 16);
  display: grid;
  background-color: var(--main-green);

  & div {
    width: 300px;
    height: auto;
    display: flex;
    /* justify-items: flex-end; */
    align-items: center;
    justify-content: space-between;
    justify-self: end;
    margin-right: 50px;

    @media (max-width: 425px) {
      margin: 0 auto;
    }
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
        <Link href="/"><BsFacebook className="icons" /></Link>
        <Link href="/"><AiFillTwitterCircle className="icons" /></Link>
        <Link href="/"><AiFillInstagram className="icons" /></Link>
        <Link href="/"><AiFillLinkedin className="icons" /></Link>
        <Link href="/"><AiFillYoutube className="icons" /></Link>
      </div>
    </HeaderIconsSection>
 );
}
