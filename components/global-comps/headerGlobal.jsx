import React from "react";
import styled from "styled-components";
import HeaderNav from "../header/headerNav";
import HeaderIcons from "../header/headerIcons";

// Estilos

const Header = styled.header`
  width: 100%;
  min-height: 140px;
  /* display: grid;
  grid-template-rows: 1fr 1fr; */
`;
/* ------------------------------------------- */

// Componente
export default function HeaderMain() {
  return(
    <Header>
      <HeaderIcons />
      <HeaderNav />
    </Header>
 );
}
