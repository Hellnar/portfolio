import { ArticlesStyled } from "./styled/Articles.styled"
import art1 from "../assets/img/article_1.webp"
import art2 from "../assets/img/article_2.webp"
import hashnode from "../assets/img/hashnode.svg"

export default function Articles() {
    return (
        <ArticlesStyled id="articles">
            <h2>Articles</h2>
            <div className="article-section-description">
                <h3>Most of the time I write articles for newcomers to make their learning journey easier. You can find useful content related to Web Development, learning process and recommendations for people who want to get a job in IT.</h3>
            </div>
            <div className="article-list">
                <div className="article-box">
                    <div className="article-preview">
                        <img src={art1} alt="Article" />
                    </div>
                    <div className="article-body">
                        <div className="article-source">
                            <img src={hashnode} alt="Hashnode" />
                            <p>Hashnode</p>
                        </div>
                        <a className="article-title">Beginner Developer Roadmap</a>
                        <div className="article-button">
                            <button>Read article</button>
                        </div>
                    </div>
                </div>

                <div className="article-box">
                    <div className="article-preview">
                        <img src={art2} alt="Article" />
                    </div>
                    <div className="article-body">
                        <div className="article-source">
                            <img src={hashnode} alt="Hashnode" />
                            <p>Hashnode</p>
                        </div>
                        <a className="article-title" href="https://stasklymenko.hashnode.dev/nodejs-roadmap-for-beginners">Node.js Roadmap for Beginners</a>
                        <div className="article-button">
                            <button>Read article</button>
                        </div>
                    </div>
                </div>
            </div>
        </ArticlesStyled>        
    )
}