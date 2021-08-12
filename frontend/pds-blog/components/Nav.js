import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <Image src={"/assets/pdSp.svg"} alt="lele" width="300" height="100" />
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Blog posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
