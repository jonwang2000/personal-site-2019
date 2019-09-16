import React from "react"
import { Link } from "gatsby"
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
    padding-right: 1rem;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
    flex: 1 0 auto;
`

const Footer = styled.div`
    flex-shrink: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const FooterHome = styled.div`
    margin: auto;
    padding: .5em;
    font-size: 1.4em;
`

const FooterLinks = styled.div`
    margin: auto;
    padding-bottom: .7em;
`

const FooterLink = styled.a`
    padding-left: 0.5em;
    padding-right: 0.5em;
`

const FooterCredits = styled.p`
    font-size: .8em;
`

export default ({ children }) => (
    <Base>
        <Content>
            <ParticleBackground />
            {children}
        </Content>
        <Footer>
            <FooterContent>
                <FooterHome><Link to="">JW</Link></FooterHome>
                <FooterLinks>
                    <FooterLink href="https://www.github.com/jonwang2000">
                        Github
                    </FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/jonathanwang2000/">
                        LinkedIn
                    </FooterLink>
                    <FooterLink href="mailto:jonathanw.ca@hotmail.com">email</FooterLink>
                </FooterLinks>
                <FooterCredits>
                    Made with Gatsby, styled-components, and React
                </FooterCredits>
            </FooterContent>
        </Footer>
    </Base>
)
