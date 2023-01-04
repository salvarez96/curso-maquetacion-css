import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BlogPreview from "./blogPreview";
import blogPreviewInfo from "./blogPreviewInfo.json";

// Estilos

const BlogPostSectionContainer = styled.div`
  width: 80vw;
  margin: 50px auto 40px;
  max-width: 1000px;

  & h2 {
    text-align: center;
    border-bottom: 2px solid var(--gray-bg);
    padding-bottom: 30px;
    margin-bottom: 20px;
  }

  & section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 15px;
    margin-top: 25px;
  }

  & .blogpost-container {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    
    & img {
      width: 100%;
      height: auto;
    }
  }
`;
/* ------------------------------------------- */

// Componente

export default function BlogPostSection() {
  
  return(
    <BlogPostSectionContainer>
      <h2>últimos blogposts</h2>
      <section>
        {blogPreviewInfo.map(info => (
          <div key={info.key} className='blogpost-container'>
            <Image 
              src={info.src}
              alt={info.alt}
              width={310}
              height={190}
            />
            <BlogPreview 
              className='blog-preview'
              img={info.src}
              alt={info.alt}
              blogTitle={info.key}  
            >
              <p>{info.key}</p>
            </BlogPreview>
          </div>
        ))}
      </section>
    </BlogPostSectionContainer>
 );
}
