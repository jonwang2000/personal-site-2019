import React from "react"
import styled from "styled-components"

import Particles from 'react-particles-js'

import ParticleBackground from "../components/ParticleBackground"
import TextBlock from "../components/TextBlock"

// Helper functions
const dataToBlockList = data => {
    return data.map((block, index) => (
        <TextBlock
            title={block.title}
            subtitle={block.subtitle}
            main={block.main}
            italics={block.italics}
            link={block.link}
            key={index}
        />
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
