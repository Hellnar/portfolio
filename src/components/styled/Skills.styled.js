import styled from "styled-components"

export const SkillsStyled = styled.section`
    background-color: #f0f9ff;
    padding: 4rem 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 1rem;
    }

    .skills-section-description {
        text-align: center;
        width: 60%;
        margin-bottom: 2rem;
    }

    .skills-list {
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;

        .skill {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
            background-color: #fff;
            padding: 1.5rem 1rem;
            border-radius: 10px;

            .skill-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
            }

            .bg-green {background-color: #dcfce7;}
            .bg-blue {background-color: #e0f2fe;}
            .bg-yellow {background-color: #ffedd5;}

            .skill-title {
                font-weight: 700;
                font-size: 1.3rem;
                margin: 0.5rem 0;
            }

            .skill-description {
                text-align: center;
            }
        }

        #dev {
            display: block;
            position: relative;
            box-sizing: border-box;
            transform: rotate(15deg) scale(var(--ggs,1));
            width: 2px;
            height: 16px;
            background: currentColor
        }
        #dev::after,
        #dev::before {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            width: 8px;
            height: 8px;
            transform: rotate(-60deg)
        }
        #dev::before {
            border-left: 2px solid;
            border-top: 2px solid;
            left: -8px;
            top: 5px
        }
        #dev::after {
            border-right: 2px solid;
            border-bottom: 2px solid;
            right: -8px;
            top: 3px
        }

        #content {
            box-sizing: border-box;
            position: relative;
            display: block;
            transform: rotate(-45deg) scale(var(--ggs,1));
            width: 14px;
            height: 4px;
            border-right: 2px solid transparent;
            box-shadow:
                0 0 0 2px,
                inset -2px 0 0;
            border-top-right-radius: 1px;
            border-bottom-right-radius: 1px;
            margin-right: -2px
        }
        #content::after,
        #content::before {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute
        }
        #content::before {
            background: currentColor;
            border-left: 0;
            right: -6px;
            width: 3px;
            height: 4px;
            border-radius: 1px;
            top: 0
        }
        #content::after {
            width: 8px;
            height: 7px;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 7px solid;
            left: -11px;
            top: -2px
        }

        #job {
            box-sizing: border-box;
            position: relative;
            display: block;
            transform: scale(var(--ggs,1));
            width: 22px;
            height: 16px;
            border: 2px solid;
            border-radius: 2px;
            margin-top: 1px
        }
        #job::after,
        #job::before {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute
        }
        #job::before {
            border: 2px solid;
            border-top-left-radius: 1px;
            border-top-right-radius: 1px;
            left: 4px;
            width: 10px;
            height: 4px;
            border-bottom: 0;
            top: -5px
        }
        #job::after {
            width: 18px;
            height: 3px;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 1px solid transparent;
            box-shadow:
                0 2px 0,
                inset 16px 74px 0;
            top: 4px
        }
    }

    @media screen and (max-width: 1366px) {
        margin: 0;
        padding: 2rem 0;

        .skills-section-description {
            text-align: center;
            width: 80%;
            margin-bottom: 2rem;
        }
    }
`