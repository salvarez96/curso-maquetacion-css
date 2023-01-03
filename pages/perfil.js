import Head from "next/head";
import ContactMeGlobal from "../components/global-comps/contactMeGlobal";
import FooterGlobal from "../components/global-comps/footerGlobal";
import HeaderMain from "../components/global-comps/headerGlobal";
import HelloSection from "../components/profile/helloSection";

export default function ProfilePage() {
  return(
    <>
      <Head>
        <title>Mi perfil</title>
      </Head>
      <HeaderMain />
      <HelloSection />
      <ContactMeGlobal />
      <FooterGlobal />
    </>
  );
}