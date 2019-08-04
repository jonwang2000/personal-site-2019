import React from "react"
import styled from "styled-components"

const Italics = styled.p`
    font-style: italics;
`

const TextBlock = props => {
    const { title, subtitle, main, italics, link } = props

    return (
        <div>
            <a href={link}>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{main}</p>
                <Italics>{italics}</Italics>
            </a>
        </div>
    )
}

export default TextBlock
