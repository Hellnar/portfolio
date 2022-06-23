import { SlideStyled } from "./styled/Slide.styled";

export default function Slide() {
    return (
        <SlideStyled id="top">
            <div id="slide-left">
                <div id="slide-title">Full-Stack <br></br>Web Developer</div>
                <div id="slide-description">My job is to <span>solve your problems</span></div>
            </div>
            <div id="slide-right">
                <img src={require("../assets/img/me.jpg")} alt="Stas Klymenko" />
            </div>
        </SlideStyled>
    )
}
