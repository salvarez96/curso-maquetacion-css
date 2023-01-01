import HeaderMain from "../components/header/headerMain";
import styled from "styled-components";
import NewsSection from "../components/blogs/newsSection";
import GlobalStyle from "../components/globalstyles";

// Estilos

const MainContainer = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  & .news__section {
    grid-row: 1;
  }
`;
/* ------------------------------------------- */

// Componente

export default function BlogsPage() {
  return(
    <>
      <GlobalStyle />
      <HeaderMain />
      <MainContainer>
        <NewsSection className={'news__section'}/>
      </MainContainer>
    </>
  );
}