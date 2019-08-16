import React from "react"
import styled from "styled-components"

import ParticleBackground from "../components/ParticleBackground"

// Styled Components
const Base = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
`

const Upper = styled.div`
    grid-column: 1/-1;
`

const Category = styled.div`
    grid-column: 1/-1;
`

const Section = styled.div`
    line-height: 0;
    margin: 0;
    padding: 0;
    padding-bottom: 1em;
`
const SectionSubtitle = styled.p`
    font-size: 1em;
`
const SectionText = styled.p`
    font-size: 0.9em;
`
const SectionItalics = styled.p`
    font-size: 0.9em;
    font-style: italic;
`

// Helper functions
const dataToBlockList = data => {
    return data.map((block, index) => (
        <Section key={index}>
            <a href={block.link}>
                <SectionSubtitle>{block.title}</SectionSubtitle>
                <SectionSubtitle>{block.subtitle}</SectionSubtitle>
                <SectionText>{block.main}</SectionText>
                <SectionItalics>{block.italics}</SectionItalics>
            </a>
        </Section>
    ))
}

export default () => {
    return (
        <Base>
            <ParticleBackground />

            <Upper>
                <h1>Jonathan Wang</h1>
                <h2>Mathematics, UW 2023</h2>

                <p>
                    I'm a mathematics student at the University of Waterloo,
                    working on my programming and math skills. I'm always
                    looking to learn new things, and I enjoy hands-on
                    experiences.
                </p>
                <p>
                    I'm a fan of video games, cooking, and the Toronto Raptors.
                </p>
            </Upper>

            <Category>{dataToBlockList(expData)}</Category>

            <Category>{dataToBlockList(projData)}</Category>
        </Base>
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
    {
        title: "Project Title",
        subtitle: "project subtitle",
        main: "project main",
        italics: "wow technologies",
        link: "#",
    },
]
