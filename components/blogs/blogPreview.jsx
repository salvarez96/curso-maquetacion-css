import React from "react";
import styled from "styled-components";
import GlobalButton from "../global-comps/buttonGlobal";

// Estilos

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
/* ------------------------------------------- */

// Componente

export default function BlogPreview({ 
  className, 
  children, 
  img, 
  alt, 
  blogTitle }) {
  
  return(
    <>
      <Article className={className}>
        {children}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia velit quod distinctio accusamus consectetur porro excepturi fuga! Aliquid consectetur vitae tempore vero a fugiat. Praesentium exercitationem recusandae minus. Est!</p>
        <GlobalButton 
          buttonText={'Leer más'}
          bgColor='transparent'
          border={'1px solid var(--main-green)'}
          link={{
            pathname: 'blog', 
            /* querys are meant to be used in blogPreview.jsx, blogPostSection.jsx, newsSection.jsx
            and blog.js */
            query: {
              img: img.src, 
              alt: alt, 
              blogTitle: blogTitle
            }
          }}
          as={blogTitle}
          fontSize={'12'}
        />
      </Article>    
    </>
 );
}
