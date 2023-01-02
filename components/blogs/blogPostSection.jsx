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

  & img {
    width: 100%;
    height: auto;
  }

  & .blog-preview {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  & .blogpost-container {
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }
`;
/* ------------------------------------------- */

// Componente

export default function BlogPostSection() {
  
  const images = [
    {
      key: 1,
      src: '/../public/img/post-1.png',
      alt: 'Man with VR headset'
    }, 
    {
      key: 2,
      src: '/../public/img/post-2.png',
      alt: 'Laptop on a desk'
    }, 
    {
      key: 3,
      src: '/../public/img/post-3.png',
      alt: 'Man typing on a laptop'
    },
    {
      key: 4,
      src: '/../public/img/post-1.png',
      alt: 'Man with VR headset'
    }, 
    {
      key: 5,
      src: '/../public/img/post-2.png',
      alt: 'Laptop on a desk'
    }, 
    {
      key: 6,
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
              width={450}
              height={250}
            />
            <BlogPreview className='blog-preview'>
              <p>Título del Blogpost</p>
            </BlogPreview>
          </div>
        ))}
      </section>
    </BlogPostSectionContainer>
 );
}
