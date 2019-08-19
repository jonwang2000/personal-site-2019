import React from "react"
import styled from "styled-components"

import ParticleBackground from "../components/ParticleBackground"

const Base = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
`

export default ({ children }) => (
    <Base>
        <ParticleBackground />
        {children}
    </Base>
)
