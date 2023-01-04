import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BlogPreview from "./blogPreview";

// Estilos

const News = styled.section`
  background-color: var(--gray-bg);
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr 1.5fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  max-width: 1475px;
  margin: 0 auto;

  & h3 {
    grid-column: 2;
    align-self: center;
    font-size: calc(22rem / 16);
  }
  
  & p {
    font-size: calc(18rem / 16);
  }
  
  & img {
    grid-column: 2;
    width: 100%;
    height: auto;
  }
  
  & .blog-preview {
    grid-column: 4;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    
    & h3 {
      font-size: calc(28rem / 16);
    }
  }

  @media (max-width: 1500px) {
    & p {
      margin: 20px 0;
      font-size: calc(16rem / 16);
    }
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: unset;
    grid-template-rows: 0.2fr 1fr 1fr;
    width: 80vw;
    max-width: 720px;
    text-align: center;
    
    & .blog-preview {
      grid-row: 3;
      grid-column: 2;
    }
  }
  
  @media (max-width: 600px) {
    grid-template-rows: 0.2fr 0.5fr 1fr;
    padding-bottom: 20px;

    & h3 {
      margin-top: 20px;
    }

    & img {
      margin: 20px 0;
    }

    & button {
      font-size: calc(13rem / 16);
    }
  }
`;
/* ------------------------------------------- */

// Componente

export default function NewsSection({ className }) {

  const title = 'Título del Blogpost';
  const imgSrc = '/../public/img/main-news-img.png';
  const imgAlt = 'Vintage technology';

  return(
    <News className={className}>
      <ContentContainer className="content-container">
        <h3>Noticias</h3>
        <Image 
          src={imgSrc}
          alt={imgAlt}
          height={900}
          width={540}
          priority
        />
        <BlogPreview 
          className={'blog-preview'}
          img={imgSrc}
          alt={imgAlt}
          blogTitle={title}
        >
          <h3>{title}</h3>
        </BlogPreview>
      </ContentContainer>
    </News>  
 );
}
