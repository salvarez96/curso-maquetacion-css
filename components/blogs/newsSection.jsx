import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BlogPreview from "./blogPreview";

// Estilos

const News = styled.section`
  background-color: var(--gray-bg);
  
  & .content-container {
    display: grid;
    grid-template-columns: 1fr 3fr 0.5fr 1.5fr 1fr;
    grid-template-rows: 1fr 6fr 1fr;
    max-width: 1475px;
    margin: 0 auto;
  }

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
`;
/* ------------------------------------------- */

// Componente

export default function NewsSection({ className }) {

  const title = 'Título del Blogpost';
  const imgSrc = '/../public/img/main-news-img.png';
  const imgAlt = 'Vintage technology';

  return(
    <News className={className}>
      <div className="content-container">
        <h3>Noticias</h3>
        <Image 
          src={imgSrc}
          alt={imgAlt}
          height={1000}
          width={1000}  
        />
        <BlogPreview 
          className={'blog-preview'}
          img={imgSrc}
          alt={imgAlt}
          blogTitle={title}
        >
          <h3>{title}</h3>
        </BlogPreview>
      </div>
    </News>  
 );
}
