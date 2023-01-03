import React from "react";
import styled from "styled-components";
import ContactMe from "./contactMe";
import newsLetter from '../../public/img/013-newsletter.png';
import likeImg from '../../public/img/006-like.png';

// Estilos

const ContactMeSection = styled.section`
  width: 100%;
  min-height: 300px;
  background-color: var(--gray-bg);
  display: flex;
  align-items: center;

  & .limiting-width-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
/* ------------------------------------------- */

// Componente

export default function ContactMeGlobal() {
  return(
    <ContactMeSection>
      <div className="limiting-width-container">
        <ContactMe 
          image={newsLetter}
          alt='Opened letter'
          title='Contacto'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <ContactMe 
          image={likeImg}
          alt='Heart with letter'
          title='Escribe'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </div>
    </ContactMeSection>
 );
}
