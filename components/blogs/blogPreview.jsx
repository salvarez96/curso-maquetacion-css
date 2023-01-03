import React from "react";
import GlobalButton from "../global-comps/button";

export default function BlogPreview({ className, children }) {
  return(
    <>
      <article className={className}>
        {children}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia velit quod distinctio accusamus consectetur porro excepturi fuga! Aliquid consectetur vitae tempore vero a fugiat. Praesentium exercitationem recusandae minus. Est!</p>
        <GlobalButton 
          buttonText={'Leer más'}
          bgColor='transparent'
          border={'1px solid var(--main-green)'}
          link='/blog'
          fontSize={'12'}
        />
      </article>    
    </>
 );
}
