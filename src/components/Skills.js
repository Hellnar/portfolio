import { SkillsStyled } from "./styled/Skills.styled";

export default function Skills() {

    return (
        <SkillsStyled id="skills">
            <h2>Skills</h2>
            <div className="skills-section-description">
                <h3>Programming is my main hobby and a job. I love to create interesting projects and share my knowledge with other developers. When I have a free time I also try to help newcomers to get their job in IT niche.</h3>
            </div>
            <div className="skills-list">
                <div className="skill">
                    <div className="skill-icon bg-green">
                        <div id="dev"></div>
                    </div>
                    <div className="skill-title">Development</div>
                    <p className="skill-description">
                        I use modern technologies to create efficient products and apps.
                    </p>
                </div>
                <div className="skill">
                <div className="skill-icon bg-blue">
                        <div id="content"></div>
                    </div>
                    <div className="skill-title">Content creation</div>
                    <p className="skill-description">
                        Learn about web development from my blogs on Twitter, Dev.to and Hashnode.
                    </p>
                </div>
                <div className="skill">
                <div className="skill-icon bg-yellow">
                        <div id="job"></div>
                    </div>
                    <div className="skill-title">Consultations</div>
                    <p className="skill-description">
                        Comprehensive consultations and recommendations about job searching process.
                    </p>
                </div>
            </div>
        </SkillsStyled>
    )
}
