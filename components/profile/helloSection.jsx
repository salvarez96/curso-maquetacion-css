import React from "react";
import Image from "next/image";
import profilePic from '../../public/img/profile-pic.jpg';
import styled from "styled-components";

// Estilos

const Section = styled.section`
  background-color: var(--gray-bg);
  min-height: 500px;
  display: flex;
  align-items: center;

  & .main-container {
    max-width: 1475px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }

  & .image-container {
    max-width: 630px;
    margin-left: 50px;
    
    & img {
      width: 100%;
      height: auto;
  
    }
  }

  & .text-container {
    max-width: 650px;
    margin-left: 60px;
    margin-right: 50px;
    
    & h2 {
      margin-bottom: calc(35rem / 16);
      font-size: calc(28rem / 16);
    }
  
    & p {
      font-size: calc(18rem / 16);
    }
  }

`;
/* ------------------------------------------- */

// Componente

export default function HelloSection() {
  return(
    <Section>
      <div className="main-container">
        <div className="image-container">
          <Image 
            src={profilePic}
            alt="Profile picture"
            priority
          />
        </div>
        <div className="text-container">
          <h2>Hola!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellat, quidem molestias numquam, quisquam necessitatibus consectetur, ipsam quo impedit perspiciatis minima doloribus. Officiis error quae ea odio quos minus maxime!</p>
        </div>
      </div>
    </Section>
 );
}
