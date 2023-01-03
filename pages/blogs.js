import HeaderMain from "../components/global-comps/headerMain";
import NewsSection from "../components/blogs/newsSection";
import Head from "next/head";
import FooterGlobal from "../components/global-comps/footerGlobal";
import BlogPostSection from "../components/blogs/blogPostSection";


export default function BlogsPage() {
  return(
    <>
      <Head>
        <title>Página de blogs</title>
      </Head>
      <HeaderMain />
      <main>
        <NewsSection className={'news__section'} />
        <BlogPostSection />
      </main>
      <FooterGlobal />
    </>
  );
}