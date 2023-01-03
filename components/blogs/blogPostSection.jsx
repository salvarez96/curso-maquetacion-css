import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BlogPreview from "./blogPreview";

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
  
  const images = [
    {
      key: 'Título del Blogpost 1',
      src: '/../public/img/post-1.png',
      alt: 'Man with VR headset'
    }, 
    {
      key: 'Título del Blogpost 2',
      src: '/../public/img/post-2.png',
      alt: 'Laptop on a desk'
    }, 
    {
      key: 'Título del Blogpost 3',
      src: '/../public/img/post-3.png',
      alt: 'Man typing on a laptop'
    },
    {
      key: 'Título del Blogpost 4',
      src: '/../public/img/post-1.png',
      alt: 'Man with VR headset'
    }, 
    {
      key: 'Título del Blogpost 5',
      src: '/../public/img/post-2.png',
      alt: 'Laptop on a desk'
    }, 
    {
      key: 'Título del Blogpost 6',
      src: '/../public/img/post-3.png',
      alt: 'Man typing on a laptop'
    },
  ];
  
  return(
    <BlogPostSectionContainer>
      <h2>últimos blogposts</h2>
      <section>
        {images.map(image => (
          <div key={image.key} className='blogpost-container'>
            <Image 
              src={image.src}
              alt={image.alt}
              width={310}
              height={190}
            />
            <BlogPreview 
              className='blog-preview'
              img={image.src}
              alt={image.alt}
              blogTitle={image.key}  
            >
              <p>{image.key}</p>
            </BlogPreview>
          </div>
        ))}
      </section>
    </BlogPostSectionContainer>
 );
}
