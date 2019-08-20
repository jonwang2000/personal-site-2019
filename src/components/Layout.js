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
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    display: flex;
    flex-direction: column;
    margin: auto;
`

const FooterLinks = styled.div`
    margin: auto;
    padding-bottom: .5em;
`

const FooterLink = styled.a`
    padding-left: 0.5em;
    padding-right: 0.5em;
`

const FooterCredits = styled.p``

export default ({ children }) => (
    <Base>
        <Content>
            <ParticleBackground />
            {children}
        </Content>
        <Footer>
            <FooterContent>
                <FooterLinks>
                    <FooterLink href="https://www.github.com/jonwang2000">
                        Github
                    </FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/jonathanwang2000/">
                        LinkedIn
                    </FooterLink>
                    <FooterLink href="#">email</FooterLink>
                    <FooterLink href="#">Resume</FooterLink>
                </FooterLinks>
                <FooterCredits>
                    Made with Gatsby, styled-components, and React
                </FooterCredits>
            </FooterContent>
        </Footer>
    </Base>
)
