import styled from "styled-components"

export const ArticlesStyled = styled.section`
    padding: 4rem 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 1rem;
    }

    .article-section-description {
        text-align: center;
        width: 60%;
        margin-bottom: 2rem;
    }

    .article-list {
        display: flex;

        .article-box {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin: 0 2rem;
            width: 20rem;
            height: 21rem;

            .article-preview {
                width: 100%;
                height: 50%;
                 
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
            }

            .article-body {
                border-top: 1px solid #e2e8f0;
                display: flex;
                flex-direction: column;

                .article-source {
                    display: flex;
                    align-items: center;
                    background-color: #e0f2fe;
                    padding: 0.2rem 0.3rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                    width: fit-content;
                    margin-top: 0.5rem;
        
                    img {
                        height: 0.8rem;
                        width: 0.8rem;
                        margin-right: 0.3rem;
                    }
                }
        
                .article-title {
                    font-weight: 700;
                    font-size: 1.3rem;
                    margin: 1rem 0;
                    padding: 0 0.5rem;
                    height: 3rem;
                }
        
                .article-button {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 1rem;
                    button {
                        outline: none;
                        border: none;
                        border-radius: 4px;
                        background: #2563eb;
                        border: 1px solid transparent;
                        color: #fff;
                        transition: 0.2s;
                        width: fit-content;
                    }

                    button:hover {
                        background-color: transparent;
                        color: #2563eb;
                        border: 1px solid #2563eb;
                        transition: 0.2s;
                    }
                }
            }

        }
    }

    @media screen and (max-width: 1366px) {
        margin: 0 2vw;
        padding: 2rem 0;
    }

    .article-section-description {
        text-align: center;
        width: 80%;
        margin-bottom: 2rem;
    }
`


/* <div className="article-list">
        <div className="article-box">
            <div className="article-preview">
                <img src={art1} alt="Article" />
            </div>
            <div className="article-source">
                <img src={hashnode} alt="Hashnode" />
                <p>Hashnode</p>
            </div>
            <div className="article-title">Beginner Developer Roadmap</div>
            <button>Read article</button>
        </div>
    </div> */