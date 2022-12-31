import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'

const Header = styled.header`
  width: 100%;
  min-height: 140px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const HeaderIcons = styled.section`
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

const Nav = styled.nav`

`;

export default function HeaderComp() {
  return(
    <Header>
      <HeaderIcons>
        <div>
          <a href="/"><BsFacebook className="icons" /></a>
          <a href="/"><AiFillTwitterCircle className="icons" /></a>
          <a href="/"><AiFillInstagram className="icons" /></a>
          <a href="/"><AiFillLinkedin className="icons" /></a>
          <a href="/"><AiFillYoutube className="icons" /></a>
        </div>
      </HeaderIcons>
      <Nav>
        <div>
          <Link href="/"><img src="" alt="Logo de mi blog" /></Link>
        </div>
        <div>
          <Link href="/perfil">Sobre mí</Link>
        </div>
      </Nav>
    </Header>
 );
}
