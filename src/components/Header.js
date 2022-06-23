import { HeaderStyled } from "./styled/Header.styled";

export default function Header() {
    return (
        <HeaderStyled>
            <div id="logo">
                <a href="stasklymenko.dev">Stas Klymenko</a>
            </div>
            <nav id="main-nav">
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#tech">Tech stack</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <button className="contact-me">Contact me</button>
        </HeaderStyled>
    );
}