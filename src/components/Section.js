import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
    width: auto;
    margin: 0;
    padding: 0;
    line-height: 1.4;
    padding-bottom: 1em;
`
const SectionSubtitle = styled.div`
    font-size: 1.1em;
`

const SectionText = styled.div`
    font-size: 0.9em;
    padding: 0.2em 0 0.2em 0;
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
