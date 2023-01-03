import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import HeaderMain from "../components/global-comps/headerGlobal";
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

  const { query } = useRouter();
  // Link of this query is located in blogPreview.jsx

  return(
    <>
      <Head>
        <title>{query.blogTitle}</title>
      </Head>
      <HeaderMain />
      <main>
        <ImgContainer>
          <Image 
            src={query.img}
            width={1400}
            height={800}
            alt={query.alt}
            priority
          />
        </ImgContainer>
        <BlogText 
          blogPostTitle={query.blogTitle}
        />
        <ContactMeGlobal />
      </main>
      <FooterGlobal />
    </>
  );
}