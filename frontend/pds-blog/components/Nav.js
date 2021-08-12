import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-ui/core";

export default function Nav() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <Image src={"/assets/pdSp.svg"} alt="lele" width="300" height="100" />
        </Link>
        <ul>
          <li>
            <Link href="/" passHref>
              <Button>Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/posts" passHref>
              <Button>Blog</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
