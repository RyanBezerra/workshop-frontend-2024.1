/* eslint-disable @next/next/no-img-element */
import Nav from "./Nav"
import '/src/components/CSS/Header.css';
export default function Header(){
    return(
        <header>
            <img id="logo" src="/IMGs/Netflix-Logo.wine.svg" alt="logo"/>
            <Nav titulo = "Inicio" url = "/"></Nav>
            <Nav titulo = "Destaque" url = "/Destaque"></Nav>
        </header>
    )
}