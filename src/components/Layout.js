import React from "react"
import styled from "styled-components"

import ParticleBackground from "../components/ParticleBackground"

const Base = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
    flex: 1 0 auto;
`

const Footer = styled.div`
    flex-shrink: 0;
`

export default ({ children }) => (
    <Base>
        <Content>
            <ParticleBackground />
            {children}
        </Content>
        <Footer>Footer</Footer>
    </Base>
)
