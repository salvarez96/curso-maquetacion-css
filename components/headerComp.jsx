import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import Image from "next/image";

const Header = styled.header`
  width: 100%;
  min-height: 140px;
  /* display: grid;
  grid-template-rows: 1fr 1fr; */
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(90rem / 16);

  /* div del logo */
  & .logo-container {
    margin-left: 50px;
  }

  & .logo {
    margin-top: 10px;
    height: auto;
  }

  /* div del link */
  & .link-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;
  }

  & .link {
    color: black;
    border-bottom: 1px solid black;
  }
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
        <div className="logo-container">
          <Link href="/">
            <Image 
              src="/../public/img/Logo-negro.png" 
              alt="Logo de mi blog" 
              width={220} 
              height={100}
              className='logo'
             />
          </Link>
        </div>
        <div className="link-container">
          <Link href="/perfil" className="link">Sobre mí</Link>
        </div>
      </Nav>
    </Header>
 );
}
