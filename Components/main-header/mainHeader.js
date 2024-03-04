"use client"
import Link from "next/link";
import ImgLogo from "@/assets/logo.png"
import classes from "./MainHeader.module.css"
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./nav-link";


export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={ImgLogo} alt="image Logo" priority />
                    Next Level Food
                </Link>


                <nav className={classes.nav}>
                    <ul>
                        <li>
                              <NavLink href="/meals"> Brows Meals</NavLink> 
                        </li>
                     
                        <li>
                              <NavLink href="/comunity"> Foodies Community</NavLink> 
                        </li>
                     
                    </ul>
                </nav>
            </header>
        </>
    )
}