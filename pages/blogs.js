import HeaderMain from "../components/header/headerMain";
import styled from "styled-components";
import NewsSection from "../components/blogs/newsSection";
import Head from "next/head";
import FooterGlobal from "../components/footerGlobal";

// Estilos

const MainContainer = styled.main`
  
`;
/* ------------------------------------------- */

// Componente

export default function BlogsPage() {
  return(
    <>
      <Head>
        <title>Página de blogs</title>
      </Head>
      <HeaderMain />
      <MainContainer>
        <NewsSection className={'news__section'} />
      </MainContainer>
      <FooterGlobal />
    </>
  );
}