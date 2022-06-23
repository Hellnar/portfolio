import styled from "styled-components"

export const FooterStyled = styled.footer`
    padding: 4rem 20vw 2rem 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact-box {
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        padding: 1rem;
        background-color: #f0f9ff;

        .contact-box-left {
            width: 50%;
            text-align: center;

            .contact-title {
                font-size: 1.5rem;
                font-weight: 700;
            }

            .contact-description {
                color: #64748b;
            }
        }

        .contact-box-right {
            display: flex;
            align-items: center;
        }
    }

    .contact-me {
        outline: none;
        border: none;
        border-radius: 4px;
        background: #2563eb;
        border: 1px solid transparent;
        color: #fff;
        transition: 0.2s;
    }

    .contact-me:hover {
        background-color: transparent;
        color: #2563eb;
        border: 1px solid #2563eb;
        transition: 0.2s;
    }

    .footer-socials {
        margin-top: 4rem;
        border-top: 1px solid #e2e8f0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 1rem;

        ul {
            display: flex;

            li {
                a {
                    width: 2rem;
                    height: 2rem;
                    /* background-color: #e0f2fe; */
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 1.3rem;
                        height: 1.3rem;
                        filter: invert(93%) sepia(16%) saturate(589%) hue-rotate(179deg) brightness(95%) contrast(85%);
                    }
                }

                a:hover {
                    img {
                        filter: invert(30%) sepia(100%) saturate(1342%) hue-rotate(206deg) brightness(93%) contrast(98%);
                    }
                }
            }
        }
    }

    .footer-bottom {
        margin-top: 0.5rem;
    }
` 