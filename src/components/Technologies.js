import { TechnologiesStyled } from "./styled/Technologies.styled"
import html from "../assets/img/html.svg"
import css from "../assets/img/css.svg"
import sass from "../assets/img/sass.svg"
import js from "../assets/img/js.svg"
import ts from "../assets/img/ts.svg"
import react from "../assets/img/react.svg"
import next from "../assets/img/next.svg"
import node from "../assets/img/node.svg"
import express from "../assets/img/express.svg"
import fastify from "../assets/img/fastify.svg"
import mongo from "../assets/img/mongo.svg"
import firebase from "../assets/img/firebase.svg"

export default function Technologies() {

    const tech = [
        {tech: "HTML", icon: html, style: "html"},
        {tech: "CSS", icon: css, style: "css"},
        {tech: "Sass", icon: sass, style: "sass"},
        {tech: "JavaScript", icon: js, style: "js"},
        {tech: "TypeScript", icon: ts, style: "ts"},
        {tech: "React", icon: react, style: "react"},
        {tech: "Next", icon: next, style: "next"},
        {tech: "Node", icon: node, style: "node"},
        {tech: "Express", icon: express, style: "express"},
        {tech: "Fastify", icon: fastify, style: "fastify"},
        {tech: "MongoDB", icon: mongo, style: "mongo"},
        {tech: "Firebase", icon: firebase, style: "firebase"}
    ]

    return (
        <TechnologiesStyled id="tech">
            <h2>Tech stack</h2>
            <div className="tech-section-description">
                <h3>I'm a self-taught developer. Most of the time I use MERN stack to build applications but also like to work with Vanilla JS and Firebase.</h3>
            </div>
            <div className="tech-list">
                {
                    tech.map((item, index) => {
                        return (
                        <div className={`tech-box color-${item.style}`} key={index}>
                            <img src={item.icon} alt="HTML" />
                            <p className="tech-name">{item.tech}</p>
                        </div>
                        )
                    })
                }
            </div>
        </TechnologiesStyled>
    )
}
