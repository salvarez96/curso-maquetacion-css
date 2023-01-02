import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: flex-end;

  & img {
    margin: 0 auto;
  }

  & h4 {
    display: inline-block;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`

export default function ContactMe({ image, title, content, alt }) {
  return(
    <Contact className="info-container">
      <Image 
        src={image}
        width={100}
        height={100}
        alt={alt}
      />
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </Contact>
 );
}
