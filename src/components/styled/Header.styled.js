import styled from "styled-components"

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: calc(100% - 40vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20vw;
    padding: 1rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    #logo {
        a {
            font-size: 1.5rem;
            font-weight: 700;
            transition: 0.2s;
            color: #334155;
        }
    }

    #logo:hover {
        a {
            color: #2563eb;
            transition: 0.2s;
        }
    }

    #main-nav {
        ul {
            display: flex;
            align-items: center;

            li {
                margin: 0 1rem;

                a {
                    transition: 0.2s;
                    font-weight: 500;
                    color: #64748b;
                }
            }

            li:hover {
                a {
                    color: #2563eb;
                    transition: 0.2s;
                }
            }
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
`