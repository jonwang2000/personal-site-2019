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
    width: 100%;
    margin: 0 auto;
    margin-top: 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
    flex: 1 0 auto;
`

const Footer = styled.div`
    flex-shrink: 0;
    margin-top: 1em;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterContent = styled.div`
`

export default ({ children }) => (
    <Base>
        <Content>
            <ParticleBackground />
            {children}
        </Content>
        <Footer>
            <FooterContent>Footer</FooterContent>
        </Footer>
    </Base>
)
