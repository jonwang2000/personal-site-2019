import React from "react"
import styled from "styled-components"

import ParticleBackground from "../components/ParticleBackground"
import Section from "../components/Section"

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
    line-height: 160%;
`

const Category = styled.div`
    grid-column: 1/-1;
    @media (min-width: 900px) {
        grid-column: span 4;
    }
`

const Logo = styled.h1`
    font-size: 4em;
    line-height: 0.5;
`

// Helper functions
const dataToBlockList = data => {
    return data.map((block, index) => (
        <Section
            key={index}
            link={block.link}
            title={block.title}
            subtitle={block.subtitle}
            main={block.main}
            italics={block.italics}
        />
    ))
}

export default () => {
    return (
        <Base>
            <ParticleBackground />

            <Upper>
                <Logo>JW</Logo>
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

            <Category>{dataToBlockList(projData)}</Category>
        </Base>
    )
}

const expData = [
    {
        title: "Software Tester",
        subtitle: "Palette Gear",
        main:
            "tested stuffas df;lkajd;fja ds;lk jfa;lsdkjfa ;ldskjfa ;ldksjfa;lskdj fa; lkjdfl;",
        italics: "May 2019 - Aug 2019",
        link: "#",
    },
]

const projData = [
    {
        title: "Project Title",
        subtitle: "project sasdf a",
        main: "prasdfasdfasdfasd asdf asdf asdf aasdfasdfasdfasdsdf asdfoject main",
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
