import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import headerLogo from "../../public/img/Logo-negro.png";

// Estilos

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(90rem / 16);

  /* div del logo */
  & .logo-container {
    margin-left: 50px;

    @media (max-width: 425px) {
      margin: 0 auto;
    }
  }

  & .logo {
    margin-top: 6px;
    width: 250px;
    height: auto;
  }

  /* div del link */
  & .link-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;

    @media (max-width: 425px) {
      margin: 0 auto;
    }
  }

  & .link {
    color: black;
    border-bottom: 1px solid black;
    font-size: calc(20rem / 16);

    @media (max-width: 449px) {
      text-align: center;
      border-bottom: none;
    }
  }
`;
/* ------------------------------------------- */

// Componente

export default function HeaderNav() {
  return(
    <Nav>
      <div className="logo-container">
        <Link href="/blogs">
          <Image 
            src={headerLogo} 
            alt="Logo de mi blog" 
            className='logo'
            />
        </Link>
      </div>
      <div className="link-container">
        <Link href="/perfil" className="link">Sobre mí</Link>
      </div>
    </Nav>
 );
}
