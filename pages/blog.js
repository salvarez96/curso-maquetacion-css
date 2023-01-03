import Head from "next/head";
import Image from "next/image";
import HeaderMain from "../components/global-comps/headerMain";
import FooterGlobal from "../components/global-comps/footerGlobal";
import styled from "styled-components";
import ContactMeGlobal from "../components/global-comps/contactMeGlobal";
import BlogText from "../components/blog/blogText";

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
        <BlogText/>
        <ContactMeGlobal />
      </main>
      <FooterGlobal />
    </>
  );
}