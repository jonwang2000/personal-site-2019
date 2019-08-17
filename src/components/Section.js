import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
    width: auto;
    margin: 0;
    padding: 0;
    line-height: 1.4;
    padding-bottom: 1em;
    background-color: #eeee;
    text-align: justify;
`
const SectionSubtitle = styled.div`
    font-size: 1em;
`
const SectionText = styled.div`
    font-size: 0.9em;
`
const SectionItalics = styled.div`
    font-size: 0.9em;
    font-style: italic;
`

const Section = props => {
    const { link, title, subtitle, main, italics } = props

    return (
        <SectionWrapper>
            <a href={link}>
                <SectionSubtitle>{title}</SectionSubtitle>
                <SectionSubtitle>{subtitle}</SectionSubtitle>
                <SectionText>{main}</SectionText>
                <SectionItalics>{italics}</SectionItalics>
            </a>
        </SectionWrapper>
    )
}

export default Section
