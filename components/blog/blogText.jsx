import React from "react";
import styled from "styled-components";

// Estilos

const BlogTextSection = styled.section`
  width: 80vw;
  margin: calc(60rem / 16) auto;
  max-width: 1000px;

  & h3 {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray-bg);
    margin: 0 0 calc(35rem / 16);
  }

  & h2 {
    margin-bottom: calc(35rem / 16);
  }

  & p {
    margin-bottom: calc(25rem / 16);
  }
`;
/* ------------------------------------------- */

// Componente

export default function BlogText({ blogPostTitle }) {
  return(
    <BlogTextSection>
      <h3>Noticias</h3>
      <article>
        <h2>{ blogPostTitle }</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt dicta quia non, aperiam debitis cum architecto quo maxime porro numquam sint molestiae est at repudiandae. Debitis aperiam nobis laboriosam!</p>
        Exercitationem odio adipisci voluptatum quam, nobis asperiores, facilis accusamus inventore error provident, voluptate officia cumque quod? Reiciendis amet error ut sapiente earum pariatur, vel facilis saepe laudantium cumque officia architecto.
        Minus expedita veniam dolor? Exercitationem, officiis totam aliquam saepe nostrum ab a rerum, fugit sapiente et dolor perspiciatis ipsam maxime libero cum recusandae illum debitis nemo deserunt culpa autem eum!
        <p>Possimus doloremque, recusandae animi repellat architecto autem, eum laudantium earum hic culpa ad aperiam omnis distinctio veritatis expedita iure iusto numquam quidem est nemo minus deleniti commodi at dicta? Ipsa!
        Dolor quibusdam maxime magnam, perferendis iure sapiente. Repudiandae, voluptate velit tempora deserunt optio voluptatibus distinctio voluptas esse similique dolorum ipsam beatae hic aperiam, sint provident nulla quia! Quibusdam, cupiditate odio?
        Amet itaque, expedita hic quas libero corporis explicabo in tempore! Quod sunt explicabo, facere magni commodi nulla molestias ad, illum similique blanditiis nostrum tempore? Doloremque odit minus itaque aliquid aliquam.</p>
        <p>Pariatur dolore, ad similique sint odit vel quae tempore illum non explicabo blanditiis natus accusantium facilis ratione praesentium quo totam quibusdam. Sint earum dolorum maiores nulla expedita omnis aperiam suscipit.
        Ab laudantium repellendus dolor voluptatum itaque minima cumque, beatae inventore fugiat et! Pariatur molestiae eos ut, dolor fugiat molestias laboriosam sapiente itaque, enim optio temporibus aliquid officiis, non facilis ipsam.
        Illum cum commodi possimus recusandae sunt ipsum error tenetur aliquid, at reiciendis illo laborum odit aut molestiae asperiores facere porro et adipisci totam ipsa. Assumenda culpa beatae amet veritatis quod!
        Odio aliquam, beatae maiores provident est nemo minus! Error, deleniti quisquam sint alias excepturi modi deserunt nobis. Odit quis eaque ullam aspernatur. Magnam placeat numquam cum veniam? Fugiat, optio incidunt!
        Fuga aut laudantium dolore laboriosam, neque, cum, mollitia eum rerum quo fugiat molestiae. Ipsum libero ex consequatur laborum illum, saepe corporis totam vel ab dolore eos! Dolorum dolor repellat sunt.</p>
        <p>Incidunt enim ipsa possimus consectetur error nihil tempore hic est! Corrupti explicabo aut doloribus eaque itaque nobis ullam velit distinctio illo dolor iste iure repellat, autem vero harum pariatur temporibus.</p>
      </article>
    </BlogTextSection>
 );
}
