import { FooterStyled } from "./styled/Footer.styled"

import twitter from "../assets/img/twitter-social.svg"
import linkedin from "../assets/img/linkedin-social.svg"
import github from "../assets/img/github-social.svg"
import hashnode from "../assets/img/hashnode-social.svg"
import dev from "../assets/img/dev-social.svg"

export default function Footer() {
    return (
        <FooterStyled>
            <div className="contact-box">
                <div className="contact-box-left">
                    <p class="contact-title">Let's work together</p>
                    <p class="contact-description">I'm open for different job offers, cooperations and contributions discussions.</p>
                </div>
                <div className="contact-box-right">
                    <button className="contact-me">Contact me</button>
                </div>
            </div>
            <div className="footer-socials">
                <ul>
                    <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                    <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
                    <li><a href="#"><img src={github} alt="GitHub" /></a></li>
                    <li><a href="#"><img src={hashnode} alt="Hashnode" /></a></li>
                    <li><a href="#"><img src={dev} alt="Dev" /></a></li>
                </ul>
            </div>
            <p class="footer-bottom">Made with 🧡 by Stas Klymenko</p>
        </FooterStyled>
    )
}
