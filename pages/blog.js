import Head from "next/head";
import Image from "next/image";
import HeaderMain from "../components/header/headerMain";
import FooterGlobal from "../components/footerGlobal";
import ContactMe from "../components/blog/contactMe";
import styled from "styled-components";

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

export default function BlogPage() {
  return(
    <>
      <Head>
        <title>Página del blog</title>
      </Head>
      <HeaderMain />
      <main>
        <div>
          <Image />
        </div>
        <section>
          <h3>Noticias</h3>
          <article>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt dicta quia non, aperiam debitis cum architecto quo maxime porro numquam sint molestiae est at repudiandae. Debitis aperiam nobis laboriosam!
            Exercitationem odio adipisci voluptatum quam, nobis asperiores, facilis accusamus inventore error provident, voluptate officia cumque quod? Reiciendis amet error ut sapiente earum pariatur, vel facilis saepe laudantium cumque officia architecto.
            Minus expedita veniam dolor? Exercitationem, officiis totam aliquam saepe nostrum ab a rerum, fugit sapiente et dolor perspiciatis ipsam maxime libero cum recusandae illum debitis nemo deserunt culpa autem eum!
            Possimus doloremque, recusandae animi repellat architecto autem, eum laudantium earum hic culpa ad aperiam omnis distinctio veritatis expedita iure iusto numquam quidem est nemo minus deleniti commodi at dicta? Ipsa!
            Dolor quibusdam maxime magnam, perferendis iure sapiente. Repudiandae, voluptate velit tempora deserunt optio voluptatibus distinctio voluptas esse similique dolorum ipsam beatae hic aperiam, sint provident nulla quia! Quibusdam, cupiditate odio?
            Amet itaque, expedita hic quas libero corporis explicabo in tempore! Quod sunt explicabo, facere magni commodi nulla molestias ad, illum similique blanditiis nostrum tempore? Doloremque odit minus itaque aliquid aliquam.
            Pariatur dolore, ad similique sint odit vel quae tempore illum non explicabo blanditiis natus accusantium facilis ratione praesentium quo totam quibusdam. Sint earum dolorum maiores nulla expedita omnis aperiam suscipit.
            Ab laudantium repellendus dolor voluptatum itaque minima cumque, beatae inventore fugiat et! Pariatur molestiae eos ut, dolor fugiat molestias laboriosam sapiente itaque, enim optio temporibus aliquid officiis, non facilis ipsam.
            Illum cum commodi possimus recusandae sunt ipsum error tenetur aliquid, at reiciendis illo laborum odit aut molestiae asperiores facere porro et adipisci totam ipsa. Assumenda culpa beatae amet veritatis quod!
            Odio aliquam, beatae maiores provident est nemo minus! Error, deleniti quisquam sint alias excepturi modi deserunt nobis. Odit quis eaque ullam aspernatur. Magnam placeat numquam cum veniam? Fugiat, optio incidunt!
            Fuga aut laudantium dolore laboriosam, neque, cum, mollitia eum rerum quo fugiat molestiae. Ipsum libero ex consequatur laborum illum, saepe corporis totam vel ab dolore eos! Dolorum dolor repellat sunt.
            Incidunt enim ipsa possimus consectetur error nihil tempore hic est! Corrupti explicabo aut doloribus eaque itaque nobis ullam velit distinctio illo dolor iste iure repellat, autem vero harum pariatur temporibus.
            Impedit minus error quae quas iste vero ullam id repellendus natus corrupti, quibusdam repudiandae explicabo? Explicabo tenetur magnam veritatis doloribus ipsa saepe nesciunt adipisci, error, ipsam quae doloremque quisquam vel!
            Inventore omnis aspernatur vero deserunt dignissimos praesentium quam officiis nemo odio molestiae molestias dicta natus consequuntur quisquam, vel, illum neque perspiciatis totam eaque dolorem! Accusamus harum a eos sequi. Ad.
            Voluptas odio tenetur dolorem, voluptatem totam veniam facilis debitis reprehenderit esse hic ullam optio, illo voluptatibus quo temporibus accusantium eligendi id impedit molestias fuga adipisci! Ea nostrum distinctio natus placeat.</p>
          </article>
        </section>
        <ContactMeSection>
          <div className="limiting-width-container">
            <ContactMe 
              image={'/../public/img/013-newsletter.png'}
              alt='Opened letter'
              title='Contacto'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <ContactMe 
              image={'/../public/img/006-like.png'}
              alt='Heart with letter'
              title='Escribe'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
          </div>
        </ContactMeSection>
      </main>
      <FooterGlobal />
    </>
  );
}