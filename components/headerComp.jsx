import React from "react";
import Link from "next/link";
import styled from "styled-components";

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
`;

const Nav = styled.nav`

`;

export default function HeaderComp() {
  return(
    <Header>
      <HeaderIcons>
        <div>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">YouTube</a>
        </div>
      </HeaderIcons>
      <Nav>
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div>
          <Link href="/perfil">Sobre mí</Link>
        </div>
      </Nav>
    </Header>
 );
}
