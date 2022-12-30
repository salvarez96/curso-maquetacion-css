import React from "react";
import Link from "next/link";

export default function Header() {
  return(
    <header>
      <section>
        <div>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">YouTube</a>
        </div>
      </section>
      <nav>
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div>
          <Link href="/perfil">Sobre mí</Link>
        </div>
      </nav>
    </header>
 );
}
