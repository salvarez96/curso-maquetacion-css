import Head from "next/head";
import Image from "next/image";
import HeaderMain from "../components/global-comps/headerMain";
import FooterGlobal from "../components/global-comps/footerGlobal";
import styled from "styled-components";
import ContactMeGlobal from "../components/global-comps/contactMeGlobal";
import BlogText from "../components/blog/blogText";

// Estilos

const ImgContainer = styled.div`
  max-width: max-content;
  margin: 0 auto;
  min-width: 80vw;

  & img {
    display: block;
    width: 80vw;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
  }
`;
/* ------------------------------------------- */

// Componente

export default function BlogPage() {
  return(
    <>
      <Head>
        <title>Página del blog</title>
      </Head>
      <HeaderMain />
      <main>
        <ImgContainer>
          <Image 
            src={'/../public/img/main-news-img.png'}
            width={1400}
            height={800}
            alt='Vintage technology'
          />
        </ImgContainer>
        <BlogText/>
        <ContactMeGlobal />
      </main>
      <FooterGlobal />
    </>
  );
}