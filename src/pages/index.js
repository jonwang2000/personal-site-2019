import React from "react"
import styled from "styled-components"

import ParticleBackground from "../components/ParticleBackground"

const Italics = styled.p`
    font-style: italics;
`

// Helper functions
const dataToBlockList = data => {
    return data.map((block, index) => (
        <div key={index}>
            <a href={block.link}>
                <h3>{block.title}</h3>
                <h4>{block.subtitle}</h4>
                <p>{block.main}</p>
                <Italics>{block.italics}</Italics>
            </a>
        </div>
    ))
}

// Styled Components
const Section = styled.div`
`

export default () => {
    return (
        <div>
            <ParticleBackground/>

            <h1>Jonathan Wang</h1>
            <h2>Mathematics, UW 2023</h2>

            <p>
                I'm a mathematics student at the University of Waterloo, working
                on my programming and math skills. I'm always looking to learn
                new things, and I enjoy hands-on experiences.
            </p>
            <p>I'm a fan of video games, cooking, and the Toronto Raptors.</p>

            <Section>{dataToBlockList(expData)}</Section>

            <Section>{dataToBlockList(projData)}</Section>
        </div>
    )
}

const expData = [
    {
        title: "Software Tester",
        subtitle: "Palette Gear",
        main: "tested stuff",
        italics: "May 2019 - Aug 2019",
        link: "#",
    },
]

const projData = [
    {
        title: "Project Title",
        subtitle: "project subtitle",
        main: "project main",
        italics: "wow technologies",
        link: "#",
    },
]
