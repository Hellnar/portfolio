import styled from "styled-components"

export const SlideStyled = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 20vw;
    padding: 6rem 0;

    #slide-left {

        #slide-title {
            font-size: 4.5rem;
            font-weight: 700;
        }

        #slide-description {
            font-size: 1.7rem;
            color: #64748b;

            span {
                color: #2563eb;
            }
        }
    }

    #slide-right {
        img {
            border-radius: 50%;
            height: 25rem;
            width: 25rem;
        }
    }

    @media screen and (max-width: 1366px) {
        margin: 0 2vw;
        padding: 2rem 0;
    }
`