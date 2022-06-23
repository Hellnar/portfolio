import styled from "styled-components"

export const TechnologiesStyled = styled.section`
    padding: 4rem 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 1rem;
    }

    .tech-section-description {
        text-align: center;
        width: 60%;
        margin-bottom: 2rem;
    }

    .tech-list {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .tech-box {
            padding: 1rem 2rem;
            border-radius: 10px;
            background-color: #fff7ed;
            width: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0.7rem;

            img {
                height: 3.7rem;
                width: 3.7rem;
            }
    
            .tech-name {
                margin-top: 0.5rem;
                font-weight: 700;
                font-size: 0.9rem;
            }
        }

        .color-html {background-color: #fff7ed; transition: 0.2s}
        .color-css {background-color: #f0f9ff; transition: 0.2s}
        .color-sass {background-color: #fdf2f8; transition: 0.2s}
        .color-js {background-color: #fefce8; transition: 0.2s}
        .color-ts {background-color: #f0f9ff; transition: 0.2s}
        .color-react {background-color: #eff6ff; transition: 0.2s}
        .color-next {background-color: #f8fafc; transition: 0.2s}
        .color-node {background-color: #f0fdf4; transition: 0.2s}
        .color-express {background-color: #f8fafc; transition: 0.2s}
        .color-fastify {background-color: #f8fafc; transition: 0.2s}
        .color-mongo {background-color: #f0fdf4; transition: 0.2s}
        .color-firebase {background-color: #fffbeb; transition: 0.2s}

        .color-html:hover {background-color: #ffedd5; transition: 0.2s}
        .color-css:hover {background-color: #e0f2fe; transition: 0.2s}
        .color-sass:hover {background-color: #fce7f3; transition: 0.2s}
        .color-js:hover {background-color: #fef9c3; transition: 0.2s}
        .color-ts:hover {background-color: #e0f2fe; transition: 0.2s}
        .color-react:hover {background-color: #dbeafe; transition: 0.2s}
        .color-next:hover {background-color: #e2e8f0; transition: 0.2s}
        .color-node:hover {background-color: #dcfce7; transition: 0.2s}
        .color-express:hover {background-color: #e2e8f0; transition: 0.2s}
        .color-fastify:hover {background-color: #e2e8f0; transition: 0.2s}
        .color-mongo:hover {background-color: #dcfce7; transition: 0.2s}
        .color-firebase:hover {background-color: #fef3c7; transition: 0.2s}
    }

    @media screen and (max-width: 1366px) {
        margin: 0 2vw;
        padding: 2rem 0;
    }

    .tech-section-description {
        text-align: center;
        width: 80%;
        margin-bottom: 2rem;
    }

`